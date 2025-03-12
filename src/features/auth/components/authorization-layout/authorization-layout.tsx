import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export function AuthorizationLayout() {
  return (
    <Box
      style={{
        maxWidth: 400,
        width: '100%',
        position: 'absolute',
        right: '70px',
        top: '40%',
        transform: 'translateY(-50%)',
      }}
    >
      <Outlet />{' '}
    </Box>
  );
}
