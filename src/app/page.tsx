import Image from 'next/image';

import content from '@/lib/home-content';
import { carouselImages } from '@/lib/carousel-images';
import ImageCarousel from '@/components/image-carousel';
import SiteHeader from '@/components/home/site-header';
import SiteFooter from '@/components/home/site-footer';
import AnnouncementsSection from '@/components/home/announcements-section';
import AboutSection from '@/components/home/about-section';
import PressSection from '@/components/home/press-section';
import BandMediaSection from '@/components/home/band-media-section';
import { ContactSection } from '@/components/home/contact-section';
import PressKitSection from '@/components/home/press-kit-section';

const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;
const BANDSINTOWN_APPID = process.env.BANDSINTOWN_APPID;

export default function Home() {
  return (
    <div className='bg-background text-foreground'>
      <SiteHeader
        title={content.title}
        instagramAccount={content.instagramAccount}
        youtubeAccount={content.youtubeAccount}
        tiktokAccount={content.tiktokAccount}
        siteMailReceiver={SITE_MAIL_RECEIVER}
      />
      <main className='flex flex-col lg:gap-8 gap-4 max-h-full w-full'>
        <ImageCarousel images={carouselImages} />
        <AnnouncementsSection
          announcementsTitle={content.announcementsTitle}
          announcements={content.announcements}
        />
        <div className='flex-col'>
          <AboutSection title={content.title} bio={content.bio} />
          <PressSection
            pressQuoteOne={content.pressQuoteOne}
            pressQuoteOneSource={content.pressQuoteOneSource}
            pressQuoteTwo={content.pressQuoteTwo}
            pressQuoteTwoSource={content.pressQuoteTwoSource}
          />
          <BandMediaSection
            saxophones={content.saxophones}
            trumpets={content.trumpets}
            trombones={content.trombones}
            rhythm={content.rhythm}
            vocals={content.vocals}
            bandsintownArtist={content.bandsintownArtist}
            bandsintownAppId={BANDSINTOWN_APPID || ''}
            youtubeVideo1={content.youtubeVideo1}
            youtubeVideo2={content.youtubeVideo2}
            youtubeVideo3={content.youtubeVideo3}
            youtubeVideo4={content.youtubeVideo4}
          />
        </div>
        <ContactSection instagramAccount={content.instagramAccount} />
        <PressKitSection />
      </main>
      <SiteFooter
        instagramAccount={content.instagramAccount}
        youtubeAccount={content.youtubeAccount}
        tiktokAccount={content.tiktokAccount}
        siteMailReceiver={SITE_MAIL_RECEIVER}
      />
    </div>
  );
}
