import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: 360, margin: '80px auto' }}>{children}</div>;
}
