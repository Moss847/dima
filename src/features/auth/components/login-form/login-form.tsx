import { useForm } from 'react-hook-form';
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Checkbox,
  Title,
  Text,
  Alert,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EAppRoutes } from '../../../../shared/types/routes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login as loginUser } from '../../api/auth-api';

interface FormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem('token', data.accessToken);
      queryClient.setQueryData(['auth'], data);
      navigate(EAppRoutes.Boards);
    },
    onError: (error: any) => {
      console.error('Ошибка входа:', error.response?.data || error);
      alert(error.message || 'Произошла ошибка при входе');
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Данные для входа:', data);
    mutation.mutate(data);
  };

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Title order={2} mb="md" style={{ textAlign: 'center' }}>
        {t('welcome')}
      </Title>

      {mutation.isError && (
        <Alert color="red" mb="md">
          {t('loginError')}
        </Alert>
      )}

      <TextInput
        label={<span style={{ fontSize: '0.6rem' }}>{t('email')}</span>}
        placeholder={t('enterEmail')}
        required
        mb="md"
        styles={{ input: { backgroundColor: '#f0f0f0', width: '100%' } }}
        {...register('email', {
          required: t('requiredEmail'),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t('invalidEmail'),
          },
        })}
        error={errors.email?.message}
      />

      <PasswordInput
        label={<span style={{ fontSize: '0.6rem' }}>{t('password')}</span>}
        placeholder={t('enterPassword')}
        required
        mb="md"
        styles={{ input: { backgroundColor: '#f0f0f0', width: '100%' } }}
        {...register('password', {
          required: t('requiredPassword'),
          minLength: {
            value: 10,
            message: t('minLength'),
          },
          maxLength: {
            value: 20,
            message: t('maxLength'),
          },
        })}
        error={errors.password?.message}
      />

      <Checkbox label={t('rememberMe')} mb="md" {...register('rememberMe')} />

      <Button
        fullWidth
        mb="md"
        type="submit"
        disabled={mutation.status === 'pending'}
      >
        {mutation.status === 'pending' ? t('loading') : t('signIn')}
      </Button>

      {mutation.isError && (
        <Text color="red" size="sm" style={{ textAlign: 'center' }}>
          {t('loginError')}
        </Text>
      )}

      <Text size="sm" style={{ textAlign: 'center' }}>
        {t('noAccount')} <Link to={EAppRoutes.Registration}>{t('signUp')}</Link>
      </Text>

      <Button onClick={changeLanguage}>
        {i18n.language === 'en' ? 'RU' : 'EN'}
      </Button>
    </Box>
  );
}
