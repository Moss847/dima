import { AuthorizationLayout } from '../../features/auth/components/authorization-layout/AuthorizationLayout';
import { RegistrationForm } from '../../features/auth/components/registration-form/RegistrationForm';

export default function RegisterPage() {
  return (
    <AuthorizationLayout>
      <RegistrationForm />
    </AuthorizationLayout>
  );
}
