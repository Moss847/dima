import { NavLink } from 'react-router-dom';
import { Avatar, Stack, Text } from '@mantine/core';
import { useAuth } from '../../hooks/use-auth';
import './side-bar.css';

const Sidebar = () => {
  const { data } = useAuth();
  const user = data?.userInfo;

  return (
    <Stack gap="lg" className="sidebar">
      <NavLink
        to="/boards"
        className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
      >
        Boards
      </NavLink>

      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
      >
        Users
      </NavLink>

      <NavLink
        to="/tasks"
        className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
      >
        Tasks
      </NavLink>

      <div className="userInfo">
        <Avatar radius="xl" size="lg" />
        <Text size="sm" fw={500}>
          {user?.email || 'User'}
        </Text>
      </div>
    </Stack>
  );
};

export default Sidebar;
