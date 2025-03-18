import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Textarea, MultiSelect, Stack } from '@mantine/core';
import { createBoard } from '../../features/auth/api/boards';
import { getUsers } from '../../features/auth/api/users';
import { useAuth } from '../../features/auth/hooks/use-auth';
import { IUser } from '../../features/auth/api/auth-api';

const CreateBoardsPage = () => {
  const navigate = useNavigate();
  const { data: authData } = useAuth();
  const user = authData?.userInfo;

  const { data: users = [] } = useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState<string[]>([]);

  const createMutation = useMutation({
    mutationFn: createBoard,
    onSuccess: () => navigate('/boards'),
    onError: (error) => {
      console.error('Error creating board:', error);
    },
  });

  const handleSubmit = () => {
    if (!user) return;

    createMutation.mutate({
      name,
      description,
      createdById: user.id,
      members,
    });
  };

  return (
    <Stack gap="lg" p="md">
      <TextInput
        label="Board Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Textarea
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <MultiSelect
        label="Members"
        data={users.map((user) => ({ value: user.id, label: user.email }))}
        value={members}
        onChange={setMembers}
        searchable
      />
      <Button onClick={handleSubmit} loading={createMutation.isPending}>
        Create Board
      </Button>
    </Stack>
  );
};

export default CreateBoardsPage;
