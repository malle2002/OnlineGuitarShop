/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8YMiVEiEQXe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({
  locale,
  changeLocale,
}: {
  locale: Language;
  changeLocale: (newLocale: Language) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Language) => {
    // Set the cookie
    document.cookie = `PABUA_INTERVIEWAPP_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 year

    // Update local state
    changeLocale(newLocale);

    // Navigate to the new locale path
    const segments = pathname.split('/');
    const currentLocale = segments[1];
    const supportedLocales = ['en', 'mk', 'al'];

    let newPath;
    if (supportedLocales.includes(currentLocale)) {
      // Replace current locale with new locale
      segments[1] = newLocale;
      newPath = segments.join('/');
    } else {
      // Add locale to path
      newPath = `/${newLocale}${pathname}`;
    }

    // Use replace to avoid adding to history stack
    router.replace(newPath);
  };
  return (
    <React.Fragment>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <GlobeIcon className="h-5 w-5" />
              <span>{locale.toLocaleUpperCase()}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem
              onClick={() => handleLocaleChange('en')}
              className="flex items-center justify-between"
            >
              <span>English</span>
              {locale === 'en' && <CheckIcon className="h-5 w-5" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleLocaleChange('mk')}
              className="flex items-center justify-between"
            >
              Македонски
              {locale === 'mk' && <CheckIcon className="h-5 w-5" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleLocaleChange('al')}
              className="flex items-center justify-between"
            >
              Sqiptare
              {locale === 'al' && <CheckIcon className="h-5 w-5" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </React.Fragment>
  );
}

function CheckIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronDownIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
