import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from './components/LanguageProvider';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AL-Amal Engineering',
  description: 'Specialized in aluminum, glass, and architectural solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          type="image/png"
          sizes="32x32"
          href="/images/al-amal-engineering-icon.png" 
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
         
        </LanguageProvider>
      </body>
    </html>
  );
} 