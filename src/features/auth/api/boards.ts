import api from '../../../shared/api/api-instance';
import { IUser } from './auth-api';

export interface IBoard {
  id: string;
  name: string;
  description: string | null;
  members: IUser[];
  createdBy: IUser;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBoardData {
  name: string;
  description: string;
  createdById: string;
  members: string[];
}

export const getBoards = async (): Promise<IBoard[]> => {
  const response = await api.get<IBoard[]>('/boards');
  return response.data;
};

export const createBoard = async (data: CreateBoardData): Promise<IBoard> => {
  const response = await api.post<IBoard>('/boards', data);
  return response.data;
};

export const deleteBoard = async (boardId: string): Promise<void> => {
  await api.delete(`/boards/${boardId}`);
};
