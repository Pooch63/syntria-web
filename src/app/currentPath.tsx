'use client';
import { usePathname } from 'next/navigation';

export default function currentPath() {
  const pathname = usePathname();
  return pathname;
}