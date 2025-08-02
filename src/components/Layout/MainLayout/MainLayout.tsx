'use client';

import { useStickyBadge } from '@/context/NavbarStickyBadgeContext';
import Footer from './Footer';
import Navbar from './Navbar';
import { useStorePageMetadata } from '@/hooks/useStorePageMetadata';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useStorePageMetadata();
  const { brand, guitar } = useStickyBadge();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar brand={brand} guitar={guitar} />
      <section className="flex-grow">{children}</section>
      <Footer />
    </div>
  );
}
