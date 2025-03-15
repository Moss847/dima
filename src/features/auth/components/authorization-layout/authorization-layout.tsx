import { Box, Image } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export function AuthorizationLayout() {
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: '30px',
      }}
    >
      <Box>
        <Image
          src="/images/image.png"
          alt="Авторизация"
          width="100%"
          radius="md"
          height="100%"
        />
      </Box>

      <Box
        style={{
          maxWidth: 400,
          width: '100%',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
