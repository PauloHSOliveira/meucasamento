import { Junge, Poppins } from 'next/font/google';

export const junge = Junge({ weight: '400', subsets: ['latin'] });

export const poppins = Poppins({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});
