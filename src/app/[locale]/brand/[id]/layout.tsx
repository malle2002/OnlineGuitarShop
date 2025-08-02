import { NavbarStickyBadgeProvider } from '@/context/NavbarStickyBadgeContext';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';
import { getBrandDetails } from '@/services/brandService';

export default async function BrandLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const brand = await getBrandDetails(Number(id));

  return (
    <NavbarStickyBadgeProvider brand={brand}>
      <MainLayout>{children}</MainLayout>
    </NavbarStickyBadgeProvider>
  );
}
