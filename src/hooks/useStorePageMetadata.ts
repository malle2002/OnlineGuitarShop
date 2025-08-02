'use client';

import { useEffect } from 'react';

export function useStorePageMetadata() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const metadata = {
      title: document.title || 'Previous Page',
      path: window.location.pathname,
    };

    sessionStorage.setItem('previousPage', JSON.stringify(metadata));
  }, []);
}
