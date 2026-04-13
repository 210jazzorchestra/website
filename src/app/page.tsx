import Image from 'next/image';

import bioPhoto from '@/lib/bio-photo';
import sax from '@/assets/sax.png';

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

const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;
const BANDSINTOWN_APPID = process.env.BANDSINTOWN_APPID;

export default function Home() {
  return (
    <div>
      <header className='flex lg:flex-row md:flex-row sm:flex-row flex-col lg:items-end items-center justify-center gap-4 lg:justify-between md:justify-between sm:justify-between lg:pb-2 pb-6 flex-wrap'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row lg:justify-start justify-center gap-2 lg:mb-[-10px] mb-[-20px]'>
            <Image
              src={sax}
              alt='sax'
              className='antialiased mr-[-20px] mt-[-15px] mb-2 lg:block md:block sm:block lg:w-12 md:w-10 sm:w-10 hidden'
            />
            <h1
              className={cn(
                'text-[32px] lg:text-7xl font-bold uppercase text-[#fec76f] mt-[-3px] lg:mt-[-5px] antialiased',
                josefin.className
              )}
            >
              210
            </h1>

            <h1
              className={cn(
                'text-[28px] lg:text-6xl font-bold uppercase text-[#3f0385] antialiased',
                josefin.className
              )}
            >
              Jazz
            </h1>
            <h1
              className={cn(
                'text-[28px] lg:text-6xl font-bold uppercase antialiased',
                josefin.className
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
        {/* <Image
          src={photo1}
          alt={content.title}
          width={1000}
          height={1000}
          className='object-cover w-full'
        /> */}
        <ImageCarousel images={carouselImages} />

        <div className='flex-col'>
          <div className='flex flex-row lg:gap-10 gap-4'>
            <Image
              src={bioPhoto}
              alt={content.title}
              width={250}
              height={250}
              className='lg:basis-1/3 aspect-square object-cover lg:block md:block sm:hidden hidden antialiased border-4 border-stone-800 rounded-lg'
            />
            <div className='flex flex-col lg:gap-4 sm:gap-3 lg:basis-2/3'>
              <h2
                className={cn(
                  'lg:text-4xl text-2xl font-bold uppercase text-[#fec76f]',
                  josefin.className
                )}
              >
                About us
              </h2>
              <p className='lg:text-base text-sm'>{content.bio}</p>
            </div>
          </div>

          <hr className='w-full border-stone-800 my-4' />

          <div className='flex flex-col lg:items-center items-start lg:gap-4 gap-2'>
            <h2
              className={cn(
                'lg:text-4xl text-2xl font-bold uppercase text-[#fec76f] lg:pb-2',
                josefin.className
              )}
            >
              Press
            </h2>
            <div className='flex lg:gap-10 lg:flex-row md:flex-row sm:flex-row flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <p className='text-stone-300 italic lg:text-base text-sm'>
                  {content.pressQuoteOne}
                </p>
                <p className='text-stone-300 italic lg:text-base text-sm'>
                  - {content.pressQuoteOneSource}
                </p>
              </div>
              
              <div className='flex flex-col gap-2'>
                {content.pressQuoteTwo &&
                  <p className='text-stone-300 italic lg:text-base text-sm'>
                    {content.pressQuoteTwo}
                  </p>
                }
                {content.pressQuoteTwoSource &&
                  <p className='text-stone-300 italic lg:text-base text-sm'>
                    - {content.pressQuoteTwoSource}
                  </p>
                }
              </div>
            </div>
          </div>

          <hr className='w-full border-stone-800 lg:block hidden lg:my-4' />

          <div className='flex lg:flex-row flex-col lg:gap-10 gap-4 lg:mt-0 mt-4'>
            <div className='flex flex-col lg:gap-5 gap-4 lg:basis-7/12 basis-full lg:mt-0 mt-4'>
              <div className='flex flex-col gap-1 bg-stone-900 rounded-lg p-4'>
                <h2
                  className={cn(
                    'lg:text-5xl text-2xl font-bold uppercase text-[#fec76f]',
                    josefin.className
                  )}
                >
                  The Band
                </h2>
                <hr className='w-full border-stone-800 lg:pb-3 pb-0' />
                <div className='flex lg:flex-col md:flex-row sm:flex-row flex-col lg:flex-nowrap md:flex-wrap sm:flex-wrap'>
                  <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full'>
                    <h6 className='text-stone-400 font-bold lg:text-base md:text-base text-sm'>
                      Saxophones
                    </h6>
                    <p className='text-xs'>{content.saxophones}</p>
                  </div>
                  <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full mt-6'>
                    <h6 className='text-stone-400 font-bold lg:text-base md:text-base text-sm'>
                      Trumpets
                    </h6>
                    <p className='text-xs'>{content.trumpets}</p>
                  </div>
                  <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2  md:w-full sm:w-full mt-6'>
                    <h6 className='text-stone-400 font-bold lg:text-base md:text-base text-sm'>
                      Trombones
                    </h6>
                    <p className='text-xs'>{content.trombones}</p>
                  </div>
                  <div className='flex flex-col gap-1  md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full mt-6'>
                    <h6 className='text-stone-400 font-bold lg:text-base md:text-base text-sm'>
                      Rhythm
                    </h6>
                    <p className='text-xs'>{content.rhythm}</p>
                  </div>
                </div>
              </div>

              <h2 className='font-bold lg:text-4xl text-2xl text-[#fec76f] uppercase lg:my-0 my-4'>
                Shows
              </h2>

              <BandsintownWidget
                artist={content.bandsintownArtist}
                appId={BANDSINTOWN_APPID || ''}
              />
            </div>

            <hr className='w-full border-stone-800 lg:hidden' />

            <h2 className='font-bold text-2xl text-[#fec76f] uppercase lg:hidden'>
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

        <hr className='w-full border-stone-800 my-4 lg:my-0' />

        <div className='flex gap-4 lg:flex-row md:flex-row sm:flex-col flex-col'>
          <div className='flex flex-col gap-4 lg:basis-1/2 basis-full'>
            <h2 className='font-bold lg:text-4xl text-2xl text-[#fec76f] uppercase'>
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

        <hr className='w-full border-stone-800 my-4 lg:my-0' />

        <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between gap-4 items-center'>
          <h4 className='font-bold lg:text-3xl text-2xl text-[#fec76f] uppercase lg:my-0 pb-2 lg:pb-0'>
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
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-around mt-5 border-t border-stone-800 pt-5'>
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
      </footer>
    </div>
  );
}
