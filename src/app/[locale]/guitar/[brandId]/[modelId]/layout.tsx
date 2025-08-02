import { NavbarStickyBadgeProvider } from '@/context/NavbarStickyBadgeContext';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';
import { getModelDetails } from '@/services/guitarService';

export default async function BrandLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ brandId: number; modelId: string }>;
}) {
  const { brandId, modelId } = await params;
  const guitar = await getModelDetails(Number(brandId), modelId);

  return (
    <NavbarStickyBadgeProvider guitar={guitar}>
      <MainLayout>{children}</MainLayout>
    </NavbarStickyBadgeProvider>
  );
}
