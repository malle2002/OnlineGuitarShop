import { type NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('x-pathname', req.nextUrl.pathname);

  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  const pathname = req.nextUrl.pathname;
  const supportedLocales = ['en', 'mk', 'al'];

  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return response;
  }

  const cookieHeader = req.headers.get('cookie');
  let locale = 'en';

  if (cookieHeader) {
    const cookies = cookieHeader.split(';').reduce(
      (acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
      },
      {} as Record<string, string>
    );

    const cookieLocale = cookies['PABUA_INTERVIEWAPP_LOCALE'];

    if (cookieLocale && supportedLocales.includes(cookieLocale)) {
      locale = cookieLocale;
    }
  }

  const redirectUrl = `/${locale}${pathname}${req.nextUrl.search}`;

  return NextResponse.redirect(new URL(redirectUrl, req.url));
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
