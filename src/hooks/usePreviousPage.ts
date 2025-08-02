'use client';

import { useEffect, useState } from 'react';

type PreviousPage = {
  title: string;
  path: string;
} | null;

export function usePreviousPage(currentPath: string): PreviousPage {
  const [prev, setPrev] = useState<PreviousPage>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('previousPage');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.path !== currentPath) {
        setPrev(parsed);
      }
    }
  }, [currentPath]);

  return prev;
}
