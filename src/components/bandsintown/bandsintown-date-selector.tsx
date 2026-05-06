'use client';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const selectedChip =
  'bg-accent/70 text-accent-foreground hover:bg-accent dark:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/15';
const unselectedChip =
  'text-muted-foreground hover:bg-muted/40 hover:text-foreground dark:hover:bg-foreground/10';

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
        className={cn(!pastEvents ? selectedChip : unselectedChip)}
        onClick={() => setPastEvents(false)}
      >
        Upcoming
      </Button>
      <Button
        variant='ghost'
        className={cn(pastEvents ? selectedChip : unselectedChip)}
        onClick={() => setPastEvents(true)}
      >
        Past
      </Button>
    </div>
  );
}
