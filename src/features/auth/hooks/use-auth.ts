import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { checkAuth, AuthResponse } from '../api/auth-api';
import { useEffect } from 'react';

export const useAuth = (): UseQueryResult<AuthResponse, Error> => {
  const queryResult = useQuery<AuthResponse, Error>({
    queryKey: ['auth'],
    queryFn: checkAuth,
    retry: false,
  });

  useEffect(() => {
    if (queryResult.data?.accessToken) {
      localStorage.setItem('token', queryResult.data.accessToken);
    }
  }, [queryResult.data]);

  useEffect(() => {
    if (queryResult.error) {
      localStorage.removeItem('token');
    }
  }, [queryResult.error]);

  return queryResult;
};
