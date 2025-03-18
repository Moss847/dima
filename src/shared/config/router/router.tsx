import { createBrowserRouter } from 'react-router-dom';
import App from '../../../App';
import LoginPage from '../../../pages/login/login-page';
import RegisterPage from '../../../pages/register/register-page';
import { AuthorizationLayout } from '../../../features/auth/components/authorization-layout/authorization-layout';
import { EAppRoutes } from '../../types/routes';
import { RequiredAuth } from '../../../features/auth/components/RequiredAuth';
import BoardsPage from '../../../pages/boards/boards-page';
import CreateBoardsPage from '../../../pages/boards/create-boards-page';

export const router = createBrowserRouter([
  {
    path: EAppRoutes.Main,
    element: (
      <RequiredAuth>
        <App />
      </RequiredAuth>
    ),
    children: [
      {
        path: EAppRoutes.Boards,
        element: <BoardsPage />,
      },
      {
        path: 'boards/new',
        element: <CreateBoardsPage />,
      },
    ],
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
