import { Box, Flex } from '@mantine/core';
import Sidebar from '../../features/auth/components/side-bar/side-bar';

export function MainLayout({ children }: { children: any }) {
  return (
    <Flex>
      <Sidebar />
      <Box style={{ padding: '20px', flex: 1 }}>{children}</Box>
    </Flex>
  );
}
