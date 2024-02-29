import '@/styles/theme-config.css';
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '@/providers/Auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
