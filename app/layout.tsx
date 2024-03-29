import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Multiple theme sample',
  description: '3가지 이상 테마를 적용한 프로젝트 예시',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="gray">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
