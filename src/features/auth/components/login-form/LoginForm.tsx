import { useForm } from 'react-hook-form';
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Checkbox,
  Title,
  Text,
} from '@mantine/core';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Title order={2} mb="md">
        Nice to see you again
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

      <Checkbox label="Remember me" mb="md" />

      <Button fullWidth mb="md" style={{ width: '100%' }} type="submit">
        Sign In
      </Button>

      <Text size="sm" style={{ textAlign: 'center' }}>
        Don't have an account? <a href="/authorization/register">Sign up now</a>
      </Text>
    </Box>
  );
}
