import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Script from "next/script";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'CoreMex Trading',
  description: 'Commercial parcel shipping from USA to Mexico.',
  icons: {
    icon: 'img/favicon.svg',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
          <head>
        <Script
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-17707123576"
        />
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17707123576');
          `}
        </Script>
      </head>
      <body className="font-poppins main-wrap">
       
        {children}
      </body>
    </html>
  );
}
