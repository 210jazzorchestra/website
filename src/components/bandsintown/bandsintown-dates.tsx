'use client';

import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

interface Event {
  id: string;
  url: string;
  datetime: string;
  title: string;
  description: string;
  artist: {
    id: string;
    name: string;
    url: string;
    mbid: string;
    options: {
      display_listen_unit: boolean;
    };
    tracking: string[];
    image_url: string;
    thumb_url: string;
    facebook_page_url: string;
    tracker_count: number;
    upcoming_event_count: number;
    support_url: string;
    links: string;
    artist_optin_show_phone_number: boolean;
    show_multi_ticket: boolean;
  };
  venue: {
    location: string;
    name: string;
    latitude: string;
    longitude: string;
    street_address: string;
    postal_code: string;
    city: string;
    country: string;
    region: string;
  };
  lineup: string[];
  offers: {
    status: string;
    type: string;
    url: string;
  }[];
  free: boolean;
  artist_id: string;
  on_sale_datetime: string;
  festival_start_date: string;
  festival_end_date: string;
  festival_datetime_display_rule: string;
  starts_at?: string;
  ends_at?: string;
  datetime_display_rule: string;
  bandsintown_plus: boolean;
  presale: string;
  sold_out: boolean;
}

function venueGoogleMapsUrl(venue: Event['venue']): string {
  const parts = [
    venue.street_address,
    venue.city,
    venue.region,
    venue.postal_code,
    venue.country,
  ]
    .map((s) => s?.trim())
    .filter(Boolean);
  const query =
    parts.length > 0 ?
      parts.join(', ')
    : venue.location?.trim() ?? '';

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const externalLinkClass =
  'text-primary underline underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm';

export default function BandsintownDates({
  artist,
  pastEvents,
  appId,
}: {
  artist: string;
  pastEvents?: boolean;
  appId: string;
}) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch(
        `https://rest.bandsintown.com/artists/${artist}/events/?app_id=${appId}&date=${
          pastEvents ? 'past' : 'upcoming'
        }`,
      );
      const data = await res.json();
      setEvents(data);
    };

    getEvents();
  }, [artist, pastEvents, appId]);

  return (
    <ul>
      {events.length > 0 ?
        events.map((event: Event) => {
          const timeDisplay = (() => {
            if (!event.starts_at) {
              return new Date(event.datetime).toLocaleString(undefined, {
                dateStyle: 'medium',
                timeStyle: 'short',
              });
            }
            const startDate = new Date(event.starts_at);
            const start = startDate.toLocaleString(undefined, {
              dateStyle: 'medium',
              timeStyle: 'short',
            });
            if (!event.ends_at) return start;
            const endDate = new Date(event.ends_at);
            const sameCalendarDay =
              startDate.getFullYear() === endDate.getFullYear() &&
              startDate.getMonth() === endDate.getMonth() &&
              startDate.getDate() === endDate.getDate();
            const end = endDate.toLocaleString(
              undefined,
              sameCalendarDay ?
                { hour: 'numeric', minute: 'numeric' }
              : { dateStyle: 'medium', timeStyle: 'short' },
            );
            return `${start} - ${end}`;
          })();

          const v = event.venue;
          const mapsUrl = venueGoogleMapsUrl(v);
          const venueName = v.name?.trim();
          const street = v.street_address?.trim() ?? '';
          const cityState = [v.city, v.region].filter(Boolean).join(', ');
          const venueLine =
            street && cityState ?
              `${street} | ${cityState}`
            : street || cityState || v.location;

          return (
            <li
              key={event.id}
              className='list-none mt-5 flex items-center justify-between gap-3 rounded-md border border-border/60 bg-accent/45 px-3 py-3 dark:border-border/50 dark:bg-foreground/[0.07]'
            >
              <div className='min-w-0 text-left'>
                <h3 className='text-lg font-bold text-foreground'>
                  {event.url ?
                    <a
                      href={event.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={externalLinkClass}
                    >
                      {event.title}
                    </a>
                  : event.title}
                </h3>
                <p className='text-muted-foreground'>
                  {venueName || venueLine ?
                    <a
                      href={mapsUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={externalLinkClass}
                    >
                      {venueName || venueLine}
                    </a>
                  : 'Venue TBA'}
                </p>
                <p className='text-sm text-muted-foreground/90'>
                  {timeDisplay}
                </p>
              </div>
              <a
                href={event.url}
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 pl-1'
              >
                <Button
                  size='lg'
                  variant='ghost'
                  className='border border-border/50 bg-muted/25 hover:bg-muted/45 dark:border-border/40 dark:bg-foreground/10 dark:hover:bg-foreground/15'
                >
                  Info
                </Button>
              </a>
            </li>
          );
        })
      : <p className='w-full pl-2 pt-4 text-lg font-semibold text-muted-foreground'>
          No events found
        </p>
      }
    </ul>
  );
}
