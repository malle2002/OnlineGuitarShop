import StickyBadgeClient from '@/components/StickyBadgeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List',
  description: 'A list of guitar models',
};

export default async function BrandPage() {
  return (
    <div className="py-[5rem] space-y-[10rem]">
      <StickyBadgeClient />
    </div>
  );
}
