import { getBrandDetails } from '@/services/brandService';
import BrandCard from './BrandCard';
import { Brand } from '@/generated/graphql';
import { NavbarStickyBadgeProvider } from '@/context/NavbarStickyBadgeContext';

export default async function BrandDetails({ id }: { id: number }) {
  const brand: Brand = await getBrandDetails(id);

  return (
    <NavbarStickyBadgeProvider brand={brand}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        <BrandCard brand={brand} />
      </div>
    </NavbarStickyBadgeProvider>
  );
}
