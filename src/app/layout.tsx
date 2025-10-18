import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'CoreMex Trading',
  description: 'Commercial parcel shipping from USA to Mexico.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      {/* `font-poppins` es una clase que definimos en globals.css abajo */}
      <body className="font-poppins main-wrap">
        {children}
      </body>
    </html>
  );
}
