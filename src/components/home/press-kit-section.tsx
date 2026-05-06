import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PressKitSection() {
  return (
    <>
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
            <Button className='w-40' variant='outline'>
              Stage Plots
            </Button>
          </Link>
          <Link
            href='/210-Jazz-Photos.zip'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button className='w-40' variant='outline'>
              Press Photos
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
