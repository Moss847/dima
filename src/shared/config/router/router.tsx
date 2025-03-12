import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import App from '../../../App';
import LoginPage from '../../../pages/login/LoginPage';
import RegisterPage from '../../../pages/register/RegisterPage';
import { AuthorizationLayout } from '../../../features/auth/components/authorization-layout/AuthorizationLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: 'home',
      },
      {
        path: '/home',
        element: 'home',
      },
      {
        path: '/about',
        element: 'about',
      },
    ],
  },
  {
    path: '/authorization',
    element: <AuthorizationLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="login" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);
