'use client';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

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
        className={cn(
          !pastEvents ?
            'bg-muted text-foreground hover:bg-muted'
          : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
        )}
        onClick={() => setPastEvents(false)}
      >
        Upcoming
      </Button>
      <Button
        variant='ghost'
        className={cn(
          pastEvents ?
            'bg-muted text-foreground hover:bg-muted'
          : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
        )}
        onClick={() => setPastEvents(true)}
      >
        Past
      </Button>
    </div>
  );
}
