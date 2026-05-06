import { josefin } from '@/app/fonts';
import { cn } from '@/lib/utils';

export default function PressSection({
  pressQuoteOne,
  pressQuoteOneSource,
  pressQuoteTwo,
  pressQuoteTwoSource,
}: {
  pressQuoteOne: string;
  pressQuoteOneSource: string;
  pressQuoteTwo?: string;
  pressQuoteTwoSource?: string;
}) {
  return (
    <>
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
              {pressQuoteOne}
            </p>
            <p className='text-muted-foreground italic lg:text-base text-sm'>
              - {pressQuoteOneSource}
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            {pressQuoteTwo && (
              <p className='text-muted-foreground italic lg:text-base text-sm'>
                {pressQuoteTwo}
              </p>
            )}
            {pressQuoteTwoSource && (
              <p className='text-muted-foreground italic lg:text-base text-sm'>
                - {pressQuoteTwoSource}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className='w-full border-border lg:block hidden lg:my-4' />
    </>
  );
}
