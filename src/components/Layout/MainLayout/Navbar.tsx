'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ModeToggle } from '@/components/mode-toggle';
import { Brand, Model } from '@/generated/graphql';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { usePreviousPage } from '@/hooks/usePreviousPage';
import LanguageSwitcher from '@/components/language-switcher';
import { useEffect, useState } from 'react';

type NavbarProps = {
  brand?: Brand;
  guitar?: Model;
};

export default function Navbar({ brand, guitar }: NavbarProps) {
  const [locale, setLocale] = useState<Language>('en');
  const supportedLocales: Language[] = ['en', 'mk', 'al'];
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split('/');
  const currentLocale = supportedLocales.includes(segments[1] as Language)
    ? (segments[1] as Language)
    : 'en';
  const imageSrc = '/guitar.png';

  const isOnBrandPage =
    pathname?.startsWith('/brand/') || pathname?.includes('/brand/');
  const showBrandImage = isOnBrandPage && brand?.image;
  const isOnGuitarModelPage =
    pathname?.startsWith('/guitar/') || pathname?.includes('/guitar/');
  const showGuitarModelImage = isOnGuitarModelPage && guitar?.image;
  const prevPage = usePreviousPage(pathname);
  const showBackButton = prevPage && pathname !== '/' + currentLocale;

  useEffect(() => {
    const segments = pathname.split('/');
    const localeFromPath = segments[1] as Language;
    const supportedLocales: Language[] = ['en', 'mk', 'al'];

    if (supportedLocales.includes(localeFromPath)) {
      setLocale(localeFromPath);
      document.cookie = `PABUA_INTERVIEWAPP_LOCALE=${localeFromPath}; path=/; max-age=31536000`;
    } else {
      // Fallback to cookie or browser locale
      const cookieLocale = document.cookie
        .split(';')
        .find((row) => row.trim().startsWith('PABUA_INTERVIEWAPP_LOCALE='))
        ?.split('=')[1] as Language;

      if (cookieLocale && supportedLocales.includes(cookieLocale)) {
        setLocale(cookieLocale);
      } else {
        const browserLocale = navigator.language.slice(0, 2) as Language;
        const finalLocale = supportedLocales.includes(browserLocale)
          ? browserLocale
          : 'en';
        setLocale(finalLocale);
        document.cookie = `PABUA_INTERVIEWAPP_LOCALE=${finalLocale}; path=/; max-age=31536000`;
      }
    }
  }, [pathname]);

  const changeLocale = (newLocale: Language) => {
    setLocale(newLocale);
  };

  return (
    <nav className="relative bg-primary">
      <div className="max-w-full mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-end md:justify-between items-center h-16 py-[4rem]">
          {showBackButton && (
            <div className="absolute left-4 top-[0.5rem] z-50 md:left-8 md:top-6 flex items-center">
              <button
                onClick={() => router.push(prevPage!.path)}
                className="text-primary-content hover:text-orange-500 transition-colors flex items-center space-x-1"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">
                  Go back to {prevPage!.title}
                </span>
              </button>
            </div>
          )}
          {/* Logo */}
          <div
            className="
  absolute left-1/2 top-[0.5rem] transform -translate-x-1/2
  md:static md:left-0 md:top-auto md:transform-none md:translate-0
  flex-shrink-0 flex flex-row space-x-3
  px-[3rem]
"
          >
            <Image
              src="/logo28x28.png"
              alt="Logo"
              width={28}
              height={28}
              className="w-[1.25rem] h-[1.25rem] self-center"
            />
            <Link href="/" className="flex items-center">
              <span className="text-xl text-primary-content">VibeStrings</span>
            </Link>
            <ModeToggle />
            <LanguageSwitcher locale={locale} changeLocale={changeLocale} />
          </div>
        </div>
      </div>

      {/* Image Badge - positioned absolutely in top-right corner */}
      {showGuitarModelImage ? (
        <div
          className={` absolute -top-[15vh] right-0 z-10 hidden md:block w-48 md:w-[30rem] lg:w-[35rem] xl:w-[45rem]`}
        >
          <div className="relative inline-block">
            <Image src="/guitar.png" alt="Masked" className="block" />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#FF8C60] to-[#FF5B1C]"
              style={{
                maskImage: "url('/guitar.png')",
                WebkitMaskImage: "url('/guitar.png')",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'cover',
                WebkitMaskSize: 'cover',
              }}
            />
            <Image
              src={guitar.image!}
              alt="Center Icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25vw] h-auto -rotate-45"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
              <div
                className={`w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100`}
              >
                <Image
                  src="/logo24x24.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="w-[1.25rem] h-[1.25rem] self-center"
                />
              </div>
            </div>
          </div>
        </div>
      ) : showBrandImage ? (
        <div
          className={` absolute -top-[15vh] right-0 z-10 hidden md:block w-48 md:w-[30rem] lg:w-[35rem] xl:w-[45rem]`}
        >
          <div className="relative inline-block">
            <Image src="/guitar.png" alt="Masked" className="block" />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#FF8C60] to-[#FF5B1C]"
              style={{
                maskImage: "url('/guitar.png')",
                WebkitMaskImage: "url('/guitar.png')",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'cover',
                WebkitMaskSize: 'cover',
              }}
            />
            <Image
              src={brand.image!}
              alt="Center Icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25vw] h-[25vh]"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
              <div
                className={`w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100`}
              >
                <Image
                  src="/logo24x24.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="w-[1.25rem] h-[1.25rem] self-center"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` absolute top-0 right-0 z-10 hidden md:block w-48 md:w-[30rem] lg:w-[35rem] xl:w-[45rem]`}
        >
          <Image
            src={imageSrc}
            alt="Guitar image"
            layout="responsive"
            width={672}
            height={381}
            objectFit="contain"
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
            <div
              className={`w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100`}
            >
              <Image
                src="/logo24x24.png"
                alt="Logo"
                width={24}
                height={24}
                className="w-[1.25rem] h-[1.25rem] self-center"
              />
            </div>
          </div>
        </div>
      )}

      {showGuitarModelImage ? (
        <div className="flex items-center justify-center pt-[5rem] sm:hidden">
          <div className="relative w-full h-full max-w-[200px] max-h-[200px]">
            {guitar?.image && (
              <Image
                src={guitar?.image}
                alt="Guitar image"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            )}
          </div>
        </div>
      ) : showBrandImage ? (
        <div className="absolute inset-0 flex items-center justify-center pt-[5rem] sm:hidden">
          <div className="relative w-full h-full max-w-[200px] max-h-[200px]">
            {brand?.image && (
              <Image
                src={brand?.image}
                alt="Guitar image"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
