import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { EAppRoutes } from '../../../shared/types/routes';
import { ReactNode, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

interface RequiredAuthProps {
  children: ReactNode;
}

export function RequiredAuth({ children }: RequiredAuthProps) {
  const { data: authData } = useAuth();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (authData) {
      queryClient.setQueryData(['auth'], authData);
    }
  }, [authData, queryClient]);

  return authData?.accessToken ? (
    <>{children}</>
  ) : (
    <Navigate to={EAppRoutes.Login} replace />
  );
}
