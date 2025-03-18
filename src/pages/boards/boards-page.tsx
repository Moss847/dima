import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Stack,
  Text,
  LoadingOverlay,
  Alert,
} from '@mantine/core';
import { getBoards, IBoard } from '../../features/auth/api/boards';

const BoardsPage = () => {
  const {
    data: boards = [],
    isLoading,
    isError,
  } = useQuery<IBoard[]>({
    queryKey: ['boards'],
    queryFn: getBoards,
  });

  if (isLoading) {
    return <LoadingOverlay visible={true} />;
  }

  if (isError) {
    return (
      <Alert color="red" title="Error">
        Failed to load boards. Please try again later.
      </Alert>
    );
  }

  return (
    <Stack gap="lg" p="md">
      <Text fw={500} size="xl">
        All Boards
      </Text>
      {boards.map((board) => (
        <Card key={board.id} shadow="sm" padding="lg">
          <Text>{board.name}</Text>
          <Text size="sm" color="dimmed">
            {board.description || 'No description'}
          </Text>
          <Text size="sm" color="dimmed">
            Created by: {board.createdBy.name} {board.createdBy.surname}
          </Text>
        </Card>
      ))}

      <Button component={Link} to="/boards/new" fullWidth>
        Add New Board
      </Button>
    </Stack>
  );
};

export default BoardsPage;
