import { z } from 'zod';
import rawContent from '@/app/content.json';

const announcementSchema = z
  .object({
    title: z.string().optional().default(''),
    text: z.string().optional().default(''),
  })
  .strict();

const homeContentSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    followSystemTheme: z.boolean(),
    defaultAppearance: z.enum(['default', 'light', 'dark']),
    announcementsTitle: z.string().optional(),
    announcements: z.array(announcementSchema).default([]),
    bio: z.string().min(1),
    saxophones: z.string().min(1),
    trumpets: z.string().min(1),
    trombones: z.string().min(1),
    rhythm: z.string().min(1),
    vocals: z.string().optional(),
    pressQuoteOne: z.string().min(1),
    pressQuoteOneSource: z.string().min(1),
    pressQuoteTwo: z.string().optional(),
    pressQuoteTwoSource: z.string().optional(),
    youtubeVideo1: z.string().url(),
    youtubeVideo2: z.string().url(),
    youtubeVideo3: z.string().url(),
    youtubeVideo4: z.string().url(),
    instagramAccount: z.string().min(1),
    tiktokAccount: z.string().min(1),
    youtubeAccount: z.string().min(1),
    bandsintownArtist: z.string().min(1),
  })
  .strict();

export type HomeContent = z.infer<typeof homeContentSchema>;
export type HomeAnnouncement = z.infer<typeof announcementSchema>;

const content: HomeContent = homeContentSchema.parse(rawContent);

export default content;
