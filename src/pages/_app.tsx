import '@/styles/theme-config.css';
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app';
import { Theme } from '@radix-ui/themes';
import { AuthProvider } from '@/providers/Auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Theme style={{ height: '100dvh' }}>
        <Component {...pageProps} />
      </Theme>
    </AuthProvider>
  );
}
