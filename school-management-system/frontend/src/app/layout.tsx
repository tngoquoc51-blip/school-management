import '@/styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = { title: 'School Management System' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
