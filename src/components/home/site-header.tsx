import Image from 'next/image';
import { josefin } from '@/app/fonts';
import { cn } from '@/lib/utils';
import logo from '@/lib/logo';
import SocialLinks from './social-links';

type SiteHeaderProps = {
  title: string;
  instagramAccount: string;
  youtubeAccount: string;
  tiktokAccount: string;
  siteMailReceiver?: string;
};

export default function SiteHeader({
  title,
  instagramAccount,
  youtubeAccount,
  tiktokAccount,
  siteMailReceiver,
}: SiteHeaderProps) {
  return (
    <header className='flex w-full  sm:justify-between justify-center gap-4 items-center lg:pb-2 pb-6 flex-wrap'>
      <Image
        src={logo}
        alt={title}
        className='antialiased md:mb-0 lg:mb-2 w-min lg:max-h-[150px] md:max-h-[150px] sm:max-h-[120px] max-h-[150px] object-contain'
      />
      <div className='hidden sm:flex flex-col items-end gap-2'>
        <div className='flex items-end gap-2'>
          <h1
            className={cn(
              'text-[28px] leading-none sm:text-[45px] md:text-[55px] lg:text-[65px] font-bold uppercase  antialiased',
              'text-primary',
              josefin.className,
            )}
          >
            210
          </h1>

          <h1
            className={cn(
              'text-[24px] leading-none sm:text-[35px] md:text-[45px] lg:text-[55px] font-bold uppercase antialiased',
              'text-secondary',
              josefin.className,
            )}
          >
            Jazz
          </h1>
          <h1
            className={cn(
              'text-[24px] leading-none sm:text-[35px] md:text-[45px] lg:text-[55px] font-bold uppercase antialiased',
              josefin.className,
            )}
          >
            Orchestra
          </h1>
        </div>
        <SocialLinks
          instagramAccount={instagramAccount}
          youtubeAccount={youtubeAccount}
          tiktokAccount={tiktokAccount}
          siteMailReceiver={siteMailReceiver}
          className='flex sm:flex-row gap-6 lg:mt-0 [&_svg]:size-8 sm:[&_svg]:size-10 [&_svg]:text-foreground/80'
        />
      </div>
    </header>
  );
}
