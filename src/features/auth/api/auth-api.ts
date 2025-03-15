import api from '../../../shared/api/api-instance';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  password: string;
  email: string;
  isAccountActivated: boolean;
  accountActivationLink: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  refreshToken: string;
  accessToken: string;
  userInfo: IUser;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  surname: string;
  password: string;
}

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/users/login', data);
  return response.data;
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/users/register', data);
  return response.data;
};

export const checkAuth = async (): Promise<AuthResponse> => {
  const response = await api.get<AuthResponse>('/users/refresh', {
    withCredentials: true,
  });
  return response.data;
};
