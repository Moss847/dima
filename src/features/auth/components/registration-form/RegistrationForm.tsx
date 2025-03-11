import { useForm } from 'react-hook-form';
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Title,
  Text,
} from '@mantine/core';

interface FormData {
  email: string;
  name: string;
  surname: string;
  password: string;
}

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Title order={2} mb="md" style={{ textAlign: 'center' }}>
        Create an account
      </Title>

      <TextInput
        label={<span style={{ fontSize: '0.6rem' }}>Email</span>}
        placeholder="Enter your email"
        required
        mb="md"
        styles={{ input: { backgroundColor: '#f0f0f0', width: '100%' } }}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
        error={errors.email?.message}
      />

      <TextInput
        label={<span style={{ fontSize: '0.6rem' }}>Name</span>}
        placeholder="Enter your name"
        required
        mb="md"
        styles={{ input: { backgroundColor: '#f0f0f0', width: '100%' } }}
        {...register('name', {
          required: 'Name is required',
          minLength: {
            value: 5,
            message: 'Name must be at least 5 characters',
          },
          maxLength: {
            value: 15,
            message: 'Name must be at most 15 characters',
          },
        })}
        error={errors.name?.message}
      />

      <TextInput
        label={<span style={{ fontSize: '0.6rem' }}>Surname</span>}
        placeholder="Enter your surname"
        required
        mb="md"
        styles={{ input: { backgroundColor: '#f0f0f0', width: '100%' } }}
        {...register('surname', {
          required: 'Surname is required',
          minLength: {
            value: 8,
            message: 'Surname must be at least 8 characters',
          },
          maxLength: {
            value: 13,
            message: 'Surname must be at most 13 characters',
          },
        })}
        error={errors.surname?.message}
      />

      <PasswordInput
        label={<span style={{ fontSize: '0.6rem' }}>Password</span>}
        placeholder="Enter your password"
        required
        mb="md"
        styles={{ input: { backgroundColor: '#f0f0f0', width: '100%' } }}
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 10,
            message: 'Password must be at least 10 characters',
          },
          maxLength: {
            value: 20,
            message: 'Password must be at most 20 characters',
          },
        })}
        error={errors.password?.message}
      />

      <Button type="submit" fullWidth mb="md" style={{ width: '100%' }}>
        Sign Up
      </Button>

      <Text size="sm" style={{ textAlign: 'center' }}>
        Already have an account? <a href="/authorization/login">Sign in</a>
      </Text>
    </Box>
  );
}
