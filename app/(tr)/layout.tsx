import type { ReactNode } from 'react';
import { Shell, buildMetadata } from '@/components/Shell';
import '../globals.css';

export { viewport } from '@/components/Shell';
export const metadata = buildMetadata('tr');

export default function Layout({ children }: { children: ReactNode }) {
  return <Shell lang="tr">{children}</Shell>;
}
