import api from '../../../shared/api/api-instance';
import { IUser } from './auth-api';

export const getUsers = async (): Promise<IUser[]> => {
  const response = await api.get<IUser[]>('/users');
  return response.data;
};
