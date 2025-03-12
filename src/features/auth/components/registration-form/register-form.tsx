import { useForm } from 'react-hook-form';
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Title,
  Text,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EAppRoutes } from '../../../../shared/types/routes';

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

  const { t, i18n } = useTranslation();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Title order={2} mb="md" style={{ textAlign: 'center' }}>
        {t('createAcc')}
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

      <TextInput
        label={<span style={{ fontSize: '0.6rem' }}>{t('name')}</span>}
        placeholder={t('enterName')}
        required
        mb="md"
        styles={{ input: { backgroundColor: '#f0f0f0', width: '100%' } }}
        {...register('name', {
          required: t('requiredName'),
          minLength: {
            value: 2,
            message: t('nameMin'),
          },
          maxLength: {
            value: 15,
            message: t('nameMax'),
          },
        })}
        error={errors.name?.message}
      />

      <TextInput
        label={<span style={{ fontSize: '0.6rem' }}>{t('surName')}</span>}
        placeholder={t('enterSurName')}
        required
        mb="md"
        styles={{ input: { backgroundColor: '#f0f0f0', width: '100%' } }}
        {...register('surname', {
          required: t('requiredSurName'),
          minLength: {
            value: 2,
            message: t('surNameMin'),
          },
          maxLength: {
            value: 15,
            message: t('surNameMax'),
          },
        })}
        error={errors.surname?.message}
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

      <Button type="submit" fullWidth mb="md" style={{ width: '100%' }}>
        {t('signUp')}
      </Button>

      <Text size="sm" style={{ textAlign: 'center' }}>
        {t('yesAccount')} <Link to={EAppRoutes.Login}>{t('signIn')}</Link>
      </Text>

      <Button onClick={changeLanguage}>
        {i18n.language === 'en' ? 'RU' : 'EN'}
      </Button>
    </Box>
  );
}
