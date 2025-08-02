'use client';

import { Brand } from '@/generated/graphql';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BrandCard({ brand }: { brand: Brand }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/brand/${brand.id}`);
  };

  return (
    <div
      className="flex items-center justify-center p-6 hover:scale-105 transition-all duration-300 hover:z-10 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 w-full">
        <div className="text-gray-800 font-medium text-lg flex items-center justify-center [&_svg]:w-16 [&_svg]:h-16 [&_svg]:max-w-full [&_svg]:max-h-full">
          <Image
            src={brand.image!}
            width={100}
            height={100}
            alt={brand.name + ' logo'}
          />
        </div>
      </div>
    </div>
  );
}
