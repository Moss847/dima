import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import { checkAuth, AuthResponse } from '../api/auth-api';
import { useEffect } from 'react';

export const useAuth = (): UseQueryResult<AuthResponse, Error> => {
  const queryClient = useQueryClient();

  const queryResult = useQuery<AuthResponse, Error>({
    queryKey: ['auth'],
    queryFn: async () => {
      const data = await checkAuth();
      if (data?.accessToken) {
        localStorage.setItem('token', data.accessToken);
        queryClient.setQueryData(['auth'], data);
      }
      return data;
    },
    retry: false,
    staleTime: Infinity,
    initialData: () => queryClient.getQueryData(['auth']),
  });

  useEffect(() => {
    if (queryResult.error) {
      localStorage.removeItem('token');
      queryClient.setQueryData(['auth'], null);
    }
  }, [queryResult.error, queryClient]);

  return queryResult;
};
