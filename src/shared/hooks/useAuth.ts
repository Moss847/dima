import { useQuery } from '@tanstack/react-query';
import { checkAuth } from '../../features/auth/api/auth-api';

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      try {
        return await checkAuth();
      } catch (error) {
        localStorage.removeItem('token');
        throw error;
      }
    },
    retry: false,
  });
};
