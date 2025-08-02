'use client';

import { Brand, Model } from '@/generated/graphql';
import React, { createContext, useContext } from 'react';

type NavbarStickyBadgeContextType = {
  brand?: Brand;
  guitar?: Model;
};

const NavbarStickyBadgeContext = createContext<NavbarStickyBadgeContextType>(
  {}
);

export function NavbarStickyBadgeProvider({
  brand,
  guitar,
  children,
}: React.PropsWithChildren<NavbarStickyBadgeContextType>) {
  return (
    <NavbarStickyBadgeContext.Provider value={{ brand, guitar }}>
      {children}
    </NavbarStickyBadgeContext.Provider>
  );
}

export function useStickyBadge() {
  return useContext(NavbarStickyBadgeContext);
}
