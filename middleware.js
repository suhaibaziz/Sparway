// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  const cookies = req.cookies;

  let lang = req.nextUrl.searchParams.get('lang');

  if (!lang) {
    lang = cookies.get('site_lang')?.value;
  }

  if (!lang) {
    // read Accept-Language header and map to your supported set
    const al = req.headers.get('accept-language') || '';
    const first = al.split(',')[0]?.trim().slice(0, 2).toLowerCase();
    // only allow your supported languages
    lang = ['de', 'en', 'ar'].includes(first) ? first : 'de';
    res.cookies.set('site_lang', lang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'Lax',
    });
  }

  return res;
}

export const config = { matcher: ['/:path*'] };
