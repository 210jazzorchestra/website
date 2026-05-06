'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

type SocialLinksProps = {
  instagramAccount: string;
  youtubeAccount: string;
  tiktokAccount: string;
  siteMailReceiver?: string;
  className?: string;
  iconClassName?: string;
};

export default function SocialLinks({
  instagramAccount,
  youtubeAccount,
  tiktokAccount,
  siteMailReceiver,
  className,
  iconClassName,
}: SocialLinksProps) {
  return (
    <div className={className}>
      <Link href={`https://www.instagram.com/${instagramAccount}`} target='_blank'>
        <FontAwesomeIcon icon={faInstagram} className={cn(iconClassName)} />
      </Link>
      <Link href={`https://www.youtube.com/channel/${youtubeAccount}`} target='_blank'>
        <FontAwesomeIcon icon={faYoutube} className={cn(iconClassName)} />
      </Link>
      <Link href={`https://www.tiktok.com/@${tiktokAccount}`} target='_blank'>
        <FontAwesomeIcon icon={faTiktok} className={cn(iconClassName)} />
      </Link>
      <Link href={`mailto:${siteMailReceiver || ''}`} target='_blank'>
        <FontAwesomeIcon icon={faEnvelope} className={cn(iconClassName)} />
      </Link>
    </div>
  );
}
