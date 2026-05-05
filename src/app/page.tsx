import Image from 'next/image';

import bioPhoto from '@/lib/bio-photo';
import logo from '@/lib/logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { josefin } from './fonts';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/contact-form';
import InstagramFeed from '@/components/instagram-feed';
import Link from 'next/link';
import content from './content.json';
import { carouselImages } from '@/lib/carousel-images';
import BandsintownWidget from '@/components/bandsintown/bandsintown-widget';
import ImageCarousel from '@/components/image-carousel';
import type { ReactNode } from 'react';

const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;
const BANDSINTOWN_APPID = process.env.BANDSINTOWN_APPID;
const INLINE_LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;

function shouldRenderAnnouncementField(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isSafeAnnouncementHref(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('/') ||
    href.startsWith('#')
  );
}

function renderInlineLinks(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let cursor = 0;
  let matchIndex = 0;

  text.replace(INLINE_LINK_REGEX, (match, label, href, offset) => {
    if (offset > cursor) {
      parts.push(text.slice(cursor, offset));
    }

    const safeHref = href.trim();
    const isExternalLink =
      safeHref.startsWith('http://') || safeHref.startsWith('https://');

    if (label && isSafeAnnouncementHref(safeHref)) {
      parts.push(
        <a
          key={`${keyPrefix}-${matchIndex}`}
          href={safeHref}
          target={isExternalLink ? '_blank' : undefined}
          rel={isExternalLink ? 'noopener noreferrer' : undefined}
          className='underline underline-offset-4 hover:opacity-80 transition-opacity text-primary'
        >
          {label}
        </a>,
      );
    } else {
      parts.push(match);
    }

    cursor = offset + match.length;
    matchIndex += 1;
    return match;
  });

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return parts;
}

export default function Home() {
  const validAnnouncements =
    Array.isArray(content.announcements) ?
      content.announcements.filter((announcement) => {
        if (!announcement || typeof announcement !== 'object') return false;

        const title =
          'title' in announcement && typeof announcement.title === 'string' ?
            announcement.title.trim()
          : '';
        const text =
          'text' in announcement && typeof announcement.text === 'string' ?
            announcement.text.trim()
          : '';

        return title.length > 0 || text.length > 0;
      })
    : [];

  return (
    <div className='bg-background text-foreground'>
      <header className='flex lg:flex-row md:flex-row sm:flex-row flex-col lg:items-end items-center justify-center gap-4 lg:justify-between md:justify-between sm:justify-between lg:pb-2 pb-6 flex-wrap'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row lg:justify-start justify-center gap-2 lg:mb-[-10px] mb-[-20px]'>
            <Image
              src={logo}
              alt={content.title}
              className='antialiased mb-2 w-min lg:max-h-[55px] md:max-h-[45px]  max-h-[35px] object-contain mx-auto'
            />
            <h1
              className={cn(
                'text-[28px] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase mt-[-3px] lg:mt-[-5px] antialiased',
                'text-primary',
                josefin.className,
              )}
            >
              210
            </h1>

            <h1
              className={cn(
                'text-[24px] sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase antialiased',
                'text-secondary',
                josefin.className,
              )}
            >
              Jazz
            </h1>
            <h1
              className={cn(
                'text-[24px] sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase antialiased',
                josefin.className,
              )}
            >
              Orchestra
            </h1>
          </div>
        </div>
        <div className='lg:flex md:flex lg:mt-0 md:mb-[-20px] sm:mb-[-20px] sm:flex gap-6 lg:mb-1 hidden'>
          <Link
            href={`https://www.instagram.com/${content.instagramAccount}`}
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className='lg:w-8 lg:h-8 w-5 h-5'
            />
          </Link>
          <Link
            href={`https://www.youtube.com/channel/${content.youtubeAccount}`}
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className='lg:w-8 lg:h-8 w-5 h-5'
            />
          </Link>
          <Link
            href={`https://www.tiktok.com/@${content.tiktokAccount}`}
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className='lg:w-8 lg:h-8 w-5 h-5'
            />
          </Link>
          <Link href={`mailto:${SITE_MAIL_RECEIVER}`} target='_blank'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='lg:w-8 lg:h-8 w-5 h-5'
            />
          </Link>
        </div>
      </header>
      <main className='flex flex-col lg:gap-8 gap-4 max-h-full w-full'>
        <ImageCarousel images={carouselImages} />

        {/* <!-- Announcements Section --> */}
        {validAnnouncements.length > 0 && (
          <>
            <section className='flex flex-col gap-3 bg-card rounded-lg p-4 border border-border'>
              {content.announcementsTitle && (
                <h2
                  className={cn(
                    'lg:text-4xl text-2xl font-bold uppercase',
                    'text-primary',
                    josefin.className,
                  )}
                >
                  {content.announcementsTitle}
                </h2>
              )}
              <ul className='list-disc list-inside lg:text-base text-sm flex flex-col gap-2'>
                {validAnnouncements.map((announcement, index) => {
                  const title =
                    (
                      'title' in announcement &&
                      typeof announcement.title === 'string'
                    ) ?
                      announcement.title.trim()
                    : '';
                  const text =
                    (
                      'text' in announcement &&
                      typeof announcement.text === 'string'
                    ) ?
                      announcement.text.trim()
                    : '';
                  const hasTitle = shouldRenderAnnouncementField(title);
                  const hasText = shouldRenderAnnouncementField(text);

                  return (
                    <li
                      key={`announcement-${index}`}
                      className='flex flex-col gap-1.5'
                    >
                      {hasTitle && (
                        <span className='block font-semibold text-base lg:text-lg text-muted-foreground underline underline-offset-2'>
                          {renderInlineLinks(
                            title,
                            `announcement-title-${index}`,
                          )}
                        </span>
                      )}
                      {hasText ?
                        <span>
                          {renderInlineLinks(
                            text,
                            `announcement-text-${index}`,
                          )}
                        </span>
                      : null}
                    </li>
                  );
                })}
              </ul>
            </section>

            <hr className='w-full border-border my-4' />
          </>
        )}
        <div className='flex-col'>
          <div className='flex flex-row lg:gap-10 gap-4'>
            <Image
              src={bioPhoto}
              alt={content.title}
              width={250}
              height={250}
              className='lg:basis-1/3 aspect-square object-cover lg:block md:block sm:hidden hidden antialiased border-4 border-border rounded-lg'
            />
            <div className='flex flex-col lg:gap-4 sm:gap-3 lg:basis-2/3'>
              <h2
                className={cn(
                  'lg:text-4xl text-2xl font-bold uppercase',
                  'text-primary',
                  josefin.className,
                )}
              >
                About us
              </h2>
              <p className='lg:text-base text-sm'>{content.bio}</p>
            </div>
          </div>

          <hr className='w-full border-border my-4' />

          <div className='flex flex-col lg:items-center items-start lg:gap-4 gap-2'>
            <h2
              className={cn(
                'lg:text-4xl text-2xl font-bold uppercase lg:pb-2',
                'text-primary',
                josefin.className,
              )}
            >
              Press
            </h2>
            <div className='flex lg:gap-10 lg:flex-row md:flex-row sm:flex-row flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <p className='text-muted-foreground italic lg:text-base text-sm'>
                  {content.pressQuoteOne}
                </p>
                <p className='text-muted-foreground italic lg:text-base text-sm'>
                  - {content.pressQuoteOneSource}
                </p>
              </div>

              <div className='flex flex-col gap-2'>
                {content.pressQuoteTwo && (
                  <p className='text-muted-foreground italic lg:text-base text-sm'>
                    {content.pressQuoteTwo}
                  </p>
                )}
                {content.pressQuoteTwoSource && (
                  <p className='text-muted-foreground italic lg:text-base text-sm'>
                    - {content.pressQuoteTwoSource}
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className='w-full border-border lg:block hidden lg:my-4' />

          <div className='flex lg:flex-row flex-col lg:gap-10 gap-4 lg:mt-0 mt-4'>
            <div className='flex flex-col lg:gap-5 gap-4 lg:basis-7/12 basis-full lg:mt-0 mt-4'>
              <div className='flex flex-col gap-1 bg-card rounded-lg p-4 border border-border'>
                <h2
                  className={cn(
                    'lg:text-5xl text-2xl font-bold uppercase',
                    'text-primary',
                    josefin.className,
                  )}
                >
                  The Band
                </h2>
                <hr className='w-full border-border lg:pb-3 pb-0' />
                <div className='flex lg:flex-col md:flex-row sm:flex-row flex-col lg:flex-nowrap md:flex-wrap sm:flex-wrap'>
                  <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full'>
                    <h6 className='text-muted-foreground font-bold lg:text-base md:text-base text-sm'>
                      Saxophones
                    </h6>
                    <p className='text-xs'>{content.saxophones}</p>
                  </div>
                  <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full mt-6'>
                    <h6 className='text-muted-foreground font-bold lg:text-base md:text-base text-sm'>
                      Trumpets
                    </h6>
                    <p className='text-xs'>{content.trumpets}</p>
                  </div>
                  <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2  md:w-full sm:w-full mt-6'>
                    <h6 className='text-muted-foreground font-bold lg:text-base md:text-base text-sm'>
                      Trombones
                    </h6>
                    <p className='text-xs'>{content.trombones}</p>
                  </div>
                  <div className='flex flex-col gap-1  md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full mt-6'>
                    <h6 className='text-muted-foreground font-bold lg:text-base md:text-base text-sm'>
                      Rhythm
                    </h6>
                    <p className='text-xs'>{content.rhythm}</p>
                  </div>
                </div>
              </div>

              <h2 className='font-bold lg:text-4xl text-2xl text-primary uppercase lg:my-0 my-4'>
                Shows
              </h2>

              <BandsintownWidget
                artist={content.bandsintownArtist}
                appId={BANDSINTOWN_APPID || ''}
              />
            </div>

            <hr className='w-full border-border lg:hidden' />

            <h2 className='font-bold text-2xl text-primary uppercase lg:hidden'>
              Videos
            </h2>

            <div className='flex flex-col lg:flex-col gap-4 lg:justify-start md:justify-around sm:justify-around justify-start lg:basis-5/12 md:flex-row sm:flex-row md:flex-wrap sm:flex-wrap lg:flex-nowrap'>
              <iframe
                width='auto'
                className='aspect-video basis-5/12'
                src={content.youtubeVideo1}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
              <iframe
                width='auto'
                className='aspect-video basis-5/12'
                src={content.youtubeVideo2}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
              <iframe
                width='auto'
                className='aspect-video basis-5/12'
                src={content.youtubeVideo3}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
              <iframe
                width='auto'
                className='aspect-video basis-5/12'
                src={content.youtubeVideo4}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <hr className='w-full border-border my-4 lg:my-0' />

        <div className='flex gap-4 lg:flex-row md:flex-row sm:flex-col flex-col'>
          <div className='flex flex-col gap-4 lg:basis-1/2 basis-full'>
            <h2 className='font-bold lg:text-4xl text-2xl text-primary uppercase'>
              Contact Us
            </h2>
            <ContactForm />
          </div>
          <div className='lg:basis-1/2 basis-full flex justify-center'>
            <InstagramFeed
              account={content.instagramAccount}
              accountTitle={content.instagramAccountTitle}
            />
          </div>
        </div>

        <hr className='w-full border-border my-4 lg:my-0' />

        <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between gap-4 items-center'>
          <h4 className='font-bold lg:text-3xl text-2xl text-primary uppercase lg:my-0 pb-2 lg:pb-0'>
            Press Kit
          </h4>
          <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col items-center lg:gap-10 gap-4'>
            <Link
              href='/stage-plots.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='w-40'>Stage Plots</Button>
            </Link>
            <Link
              href='/210-Jazz-Photos.zip'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='w-40'>Press Photos</Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-around mt-5 border-t border-border pt-5'>
        <Link
          href={`https://www.instagram.com/${content.instagramAccount}`}
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className='lg:w-8 lg:h-8 w-10 h-10'
          />
        </Link>
        <Link
          href={`https://www.youtube.com/channel/${content.youtubeAccount}`}
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className='lg:w-8 lg:h-8 w-10 h-10'
          />
        </Link>
        <Link
          href={`https://www.tiktok.com/@${content.tiktokAccount}`}
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faTiktok}
            className='lg:w-8 lg:h-8 w-10 h-10'
          />
        </Link>
        <Link href={`mailto:${SITE_MAIL_RECEIVER}`} target='_blank'>
          <FontAwesomeIcon
            icon={faEnvelope}
            className='lg:w-8 lg:h-8 w-10 h-10'
          />
        </Link>
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
    </div>
  );
}
