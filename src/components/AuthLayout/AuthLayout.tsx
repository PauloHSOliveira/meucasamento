import { useAuth } from '@/providers/Auth';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default AuthLayout;
