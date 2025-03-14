import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { EAppRoutes } from '../../../shared/types/routes';
import { ReactNode } from 'react';

interface RequiredAuthProps {
  children: ReactNode;
}

export function RequiredAuth({ children }: RequiredAuthProps) {
  const { data: authData } = useAuth();
  const isAuthenticated = !!authData?.accessToken;

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={EAppRoutes.Login} replace />
  );
}
