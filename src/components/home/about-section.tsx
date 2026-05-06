import Image from 'next/image';
import bioPhoto from '@/lib/bio-photo';
import { josefin } from '@/app/fonts';
import { cn } from '@/lib/utils';

export default function AboutSection({
  title,
  bio,
}: {
  title: string;
  bio: string;
}) {
  return (
    <>
      <div className='flex flex-row lg:gap-10 gap-4'>
        <Image
          src={bioPhoto}
          alt={title}
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
          <p className='lg:text-base text-sm'>{bio}</p>
        </div>
      </div>
      <hr className='w-full border-border my-4' />
    </>
  );
}
