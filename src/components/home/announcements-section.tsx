import type { ReactNode } from 'react';
import { josefin } from '@/app/fonts';
import { cn } from '@/lib/utils';

const INLINE_LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;

function shouldRenderAnnouncementField(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isSafeAnnouncementHref(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('/') ||
    href.startsWith('#')
  );
}

function renderInlineLinks(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let cursor = 0;
  let matchIndex = 0;

  text.replace(INLINE_LINK_REGEX, (match, label, href, offset) => {
    if (offset > cursor) parts.push(text.slice(cursor, offset));

    const safeHref = href.trim();
    const isExternalLink =
      safeHref.startsWith('http://') || safeHref.startsWith('https://');

    if (label && isSafeAnnouncementHref(safeHref)) {
      parts.push(
        <a
          key={`${keyPrefix}-${matchIndex}`}
          href={safeHref}
          target={isExternalLink ? '_blank' : undefined}
          rel={isExternalLink ? 'noopener noreferrer' : undefined}
          className='underline underline-offset-4 hover:opacity-80 transition-opacity text-primary'
        >
          {label}
        </a>,
      );
    } else {
      parts.push(match);
    }

    cursor = offset + match.length;
    matchIndex += 1;
    return match;
  });

  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

type Announcement = {
  title?: string;
  text?: string;
};

export default function AnnouncementsSection({
  announcementsTitle,
  announcements,
}: {
  announcementsTitle?: string;
  announcements?: Announcement[];
}) {
  const validAnnouncements =
    Array.isArray(announcements) ?
      announcements.filter((announcement) => {
        if (!announcement || typeof announcement !== 'object') return false;
        const title = typeof announcement.title === 'string' ? announcement.title.trim() : '';
        const text = typeof announcement.text === 'string' ? announcement.text.trim() : '';
        return title.length > 0 || text.length > 0;
      })
    : [];

  if (validAnnouncements.length === 0) return null;

  return (
    <>
      <section className='flex flex-col gap-3 bg-card rounded-lg p-4 border border-border'>
        {announcementsTitle && (
          <h2
            className={cn(
              'lg:text-4xl text-2xl font-bold uppercase',
              'text-primary',
              josefin.className,
            )}
          >
            {announcementsTitle}
          </h2>
        )}
        <ul className='list-disc list-inside lg:text-base text-sm flex flex-col gap-2'>
          {validAnnouncements.map((announcement, index) => {
            const title = typeof announcement.title === 'string' ? announcement.title.trim() : '';
            const text = typeof announcement.text === 'string' ? announcement.text.trim() : '';
            const hasTitle = shouldRenderAnnouncementField(title);
            const hasText = shouldRenderAnnouncementField(text);

            return (
              <li key={`announcement-${index}`} className='flex flex-col gap-1.5'>
                {hasTitle && (
                  <span className='block font-semibold text-base lg:text-lg text-muted-foreground underline underline-offset-2'>
                    {renderInlineLinks(title, `announcement-title-${index}`)}
                  </span>
                )}
                {hasText ? (
                  <span>{renderInlineLinks(text, `announcement-text-${index}`)}</span>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>
      <hr className='w-full border-border my-4' />
    </>
  );
}
