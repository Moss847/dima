import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onTokenRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const refreshAutoToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('Refresh token отсуствует');

    const { data } = await axios.post<{
      accessToken: string;
      refreshToken: string;
    }>(`${import.meta.env.VITE_API_BASE_URL}/users/refresh`, { refreshToken });

    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data.accessToken;
  } catch (error) {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
    throw error;
  }
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(api(originalRequest));
          });
        });
      }
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshAutoToken();
        api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        onTokenRefreshed(newToken);
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default api;
