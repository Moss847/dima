import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { checkAuth, AuthResponse } from '../api/auth-api';

export const useAuth = (): UseQueryResult<AuthResponse, Error> => {
  return useQuery<AuthResponse, Error>({
    queryKey: ['auth'],
    queryFn: async () => {
      try {
        const data = await checkAuth();
        if (data?.accessToken) {
          localStorage.setItem('token', data.accessToken);
        }
        return data;
      } catch (error) {
        localStorage.removeItem('token');
        throw error;
      }
    },
    retry: false,
  });
};
