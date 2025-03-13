import api from '../../../shared/api/api-instance';

export interface AuthResponse {
  token: string;
}

export interface RegisterData {
  email: string;
  name: string;
  surname: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', data);
  return response.data;
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/api/register', data);
  return response.data;
};

export const checkAuth = async (): Promise<AuthResponse> => {
  const response = await api.get<AuthResponse>('/auth/check');
  return response.data;
};
