import { Box } from '@mantine/core';

export function AuthorizationLayout({ children }: { children: any }) {
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
      {children}
    </Box>
  );
}
