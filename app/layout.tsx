import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { SideBar } from '@/components/ui/sidebar-superapp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Polity',
  description: 'Wealth Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex h-screen overflow-hidden bg-gray-50 w-full text-gray-900'>
          {/* <SideBar /> */}

          {/* <div className="relative flex overflow-y-auto overflow-x-hidden py-2 px-2 h-screen w-full"> */}
          {children}
          {/* </div> */}
        </div>
      </body>
    </html>
  );
}
