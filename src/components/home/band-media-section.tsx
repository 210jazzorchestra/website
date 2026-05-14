import { josefin } from '@/app/fonts';
import { cn } from '@/lib/utils';
import BandsintownWidget from '@/components/bandsintown/bandsintown-widget';

type BandMediaProps = {
  saxophones: string;
  trumpets: string;
  trombones: string;
  rhythm: string;
  vocals: string | undefined;
  bandsintownArtist: string;
  bandsintownAppId: string;
  youtubeVideo1: string;
  youtubeVideo2: string;
  youtubeVideo3: string;
  youtubeVideo4: string;
};

export default function BandMediaSection({
  saxophones,
  trumpets,
  trombones,
  rhythm,
  vocals,
  bandsintownArtist,
  bandsintownAppId,
  youtubeVideo1,
  youtubeVideo2,
  youtubeVideo3,
  youtubeVideo4,
}: BandMediaProps) {
  return (
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
              <p className='text-xs'>{saxophones}</p>
            </div>
            <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full mt-6'>
              <h6 className='text-muted-foreground font-bold lg:text-base md:text-base text-sm'>
                Trumpets
              </h6>
              <p className='text-xs'>{trumpets}</p>
            </div>
            <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2  md:w-full sm:w-full mt-6'>
              <h6 className='text-muted-foreground font-bold lg:text-base md:text-base text-sm'>
                Trombones
              </h6>
              <p className='text-xs'>{trombones}</p>
            </div>
            <div className='flex flex-col gap-1  md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full mt-6'>
              <h6 className='text-muted-foreground font-bold lg:text-base md:text-base text-sm'>
                Rhythm
              </h6>
              <p className='text-xs'>{rhythm}</p>
            </div>
            {vocals && (
              <div className='flex flex-col gap-1 md:basis-1/2 sm:basis-1/2 md:w-full sm:w-full mt-6'>
                <h6 className='text-muted-foreground font-bold lg:text-base md:text-base text-sm'>
                  Vocals
                </h6>
                <p className='text-xs'>{vocals}</p>
              </div>
            )}
          </div>
        </div>

        <h2 className='font-bold lg:text-4xl text-2xl text-primary uppercase lg:my-0 my-4'>
          Shows
        </h2>

        <BandsintownWidget
          artist={bandsintownArtist}
          appId={bandsintownAppId}
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
          src={youtubeVideo1}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
        <iframe
          width='auto'
          className='aspect-video basis-5/12'
          src={youtubeVideo2}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
        <iframe
          width='auto'
          className='aspect-video basis-5/12'
          src={youtubeVideo3}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
        <iframe
          width='auto'
          className='aspect-video basis-5/12'
          src={youtubeVideo4}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
      </div>
    </div>
  );
}
