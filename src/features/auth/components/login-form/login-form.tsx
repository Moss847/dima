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
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

  const { t, i18n } = useTranslation();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Title order={2} mb="md">
        {t('welcome')}
      </Title>

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
          required: 'Password is required',
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

      <Checkbox label={t('rememberMe')} mb="md" />

      <Button fullWidth mb="md" style={{ width: '100%' }} type="submit">
        {t('signIn')}
      </Button>

      <Text size="sm" style={{ textAlign: 'center' }}>
        {t('signIn')} <Link to="/authorization/register">{t('signUp')}</Link>
      </Text>

      <Button onClick={changeLanguage}>
        {i18n.language === 'en' ? 'RU' : 'EN'}
      </Button>
    </Box>
  );
}
