import StudentLayout from '@/layouts/StudentLayout';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <StudentLayout>{children}</StudentLayout>;
}
