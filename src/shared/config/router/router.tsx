import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../../../App';
import LoginPage from '../../../pages/login/login-page';
import RegisterPage from '../../../pages/register/register-page';
import { AuthorizationLayout } from '../../../features/auth/components/authorization-layout/authorization-layout';
import { EAppRoutes } from '../../types/routes';

export const router = createBrowserRouter([
  {
    path: EAppRoutes.Main,
    element: <App />,
    children: [
      {
        path: '',
        element: 'home',
      },
    ],
  },
  {
    path: EAppRoutes.Auth,
    element: <AuthorizationLayout />,
    children: [
      {
        path: '',
        element: <Navigate to={EAppRoutes.Login} replace />,
      },
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
