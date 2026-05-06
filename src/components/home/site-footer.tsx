import SocialLinks from './social-links';

type SiteFooterProps = {
  instagramAccount: string;
  youtubeAccount: string;
  tiktokAccount: string;
  siteMailReceiver?: string;
};

export default function SiteFooter({
  instagramAccount,
  youtubeAccount,
  tiktokAccount,
  siteMailReceiver,
}: SiteFooterProps) {
  return (
    <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center md:justify-between mt-5 border-t border-border pt-5 [&_svg]:text-foreground/80'>
      <SocialLinks
        instagramAccount={instagramAccount}
        youtubeAccount={youtubeAccount}
        tiktokAccount={tiktokAccount}
        siteMailReceiver={siteMailReceiver}
        className='flex gap-6 items-center'
        iconClassName='lg:w-8 lg:h-8 w-10 h-10'
      />
      <p className='text-xs text-muted-foreground w-full sm:w-auto text-center flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2'>
        <span>
          All Rights Reserved. 210 Jazz Orchestra ©{new Date().getFullYear()}
        </span>
        <span className='hidden sm:block'>|</span>
        <span>
          Website by{' '}
          <a
            href='https://www.zacevanscoding.com'
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4 hover:text-blue-500 text-blue-400 transition-colors'
          >
            Zac Evans
          </a>
        </span>
      </p>
    </footer>
  );
}
