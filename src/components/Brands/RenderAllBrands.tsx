import { findAllBrands } from '@/services/brandService';
import { Brand } from '@/generated/graphql';
import BrandCard from './BrandCard';

export default async function RenderAllBrands() {
  const brands = await findAllBrands();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
      {brands.map((brand: Brand, index: number) => (
        <BrandCard key={index} brand={brand} />
      ))}
    </div>
  );
}
