import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';
import content from './content.json';

export const metadata: Metadata = {
  title: content.title ?? '210 Jazz Orchestra',
  description: content.description ?? 'San Antonio, TX',
};

function themeHtmlProps() {
  const followSystemTheme = content.followSystemTheme !== false;
  if (followSystemTheme) {
    return {};
  }
  const palette =
    content.defaultAppearance === 'light' ? 'light' : 'dark';
  return { 'data-appearance': palette } as const;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeProps = themeHtmlProps();

  return (
    <html lang='en' {...themeProps}>
      <body className={roboto.variable}>
        <div className='flex flex-col items-center min-h-screen min-w-screen lg:p-8 pb-10 p-4'>
          <div className='max-w-screen-lg w-full'>{children}</div>
        </div>
      </body>
    </html>
  );
}
