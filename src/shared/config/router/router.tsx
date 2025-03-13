import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../../../App';
import LoginPage from '../../../pages/login/login-page';
import RegisterPage from '../../../pages/register/register-page';
import { AuthorizationLayout } from '../../../features/auth/components/authorization-layout/authorization-layout';
import { EAppRoutes } from '../../types/routes';

const isAuthenticated = !!localStorage.getItem('token');

export const router = createBrowserRouter([
  {
    path: EAppRoutes.Main,
    element: isAuthenticated ? (
      <App />
    ) : (
      <Navigate to={EAppRoutes.Login} replace />
    ),
  },
  {
    path: EAppRoutes.Auth,
    element: <AuthorizationLayout />,
    children: [
      {
        path: EAppRoutes.Login,
        element: <LoginPage />,
      },
      {
        path: EAppRoutes.Registration,
        element: <RegisterPage />,
      },
    ],
  },
]);
