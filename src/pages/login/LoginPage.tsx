import { AuthorizationLayout } from '../../features/auth/components/authorization-layout/AuthorizationLayout';
import { LoginForm } from '../../features/auth/components/login-form/LoginForm';

export default function LoginPage() {
  return (
    <AuthorizationLayout>
      <LoginForm />
    </AuthorizationLayout>
  );
}
