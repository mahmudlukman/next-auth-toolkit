import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth',
  description: 'A simple authentication service',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body suppressHydrationWarning={true} className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
