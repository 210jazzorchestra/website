'use client';

import { Button } from '../ui/button';

export default function BandsintownDateSelector({
  pastEvents,
  setPastEvents,
}: {
  pastEvents: boolean;
  setPastEvents: (pastEvents: boolean) => void;
}) {
  return (
    <div className='flex gap-4'>
      <Button
        variant='ghost'
        className={pastEvents ? '' : 'bg-stone-800'}
        onClick={() => setPastEvents(false)}
      >
        Upcoming
      </Button>
      <Button
        variant='ghost'
        className={pastEvents ? 'bg-stone-800' : ''}
        onClick={() => setPastEvents(true)}
      >
        Past
      </Button>
    </div>
  );
}
