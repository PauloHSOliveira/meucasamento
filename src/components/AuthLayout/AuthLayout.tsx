import { useAuth } from '@/providers/Auth';
import { Box, HStack, Heading, VStack } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import Sidebar from './Sidebar';
import { junge, poppins } from '@/assets/fonts';

const AuthLayout: React.FC<{
  children: ReactNode;
  title: string;
  activeRoute: 'families' | 'invites';
}> = ({ children, title, activeRoute }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Box height='100dvh' style={poppins.style}>
      <HStack height='full' width='full' justifyContent='space-between'>
        <Sidebar activeRoute={activeRoute} />
        <Box width='full' height='full'>
          <VStack alignItems='start' width='full' height='100%' p={8} gap={8}>
            <Heading style={junge.style}>{title}</Heading>
            {children}
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default AuthLayout;
