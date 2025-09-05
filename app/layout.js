// app/layout.jsx
import '../styles/globals.css';
import { cookies } from 'next/headers';

export default async function RootLayout({ children }) {
  // ✅ await the dynamic API
  const cookieStore = await cookies();
  const lang = cookieStore.get('site_lang')?.value || 'de';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir}>
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        {/* optional: <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </head>
      <body className={dir === 'rtl' ? 'rtl' : 'ltr'}>
        {children}
      </body>
    </html>
  );
}
