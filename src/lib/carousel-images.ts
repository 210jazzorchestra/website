/// <reference types="webpack-env" />
import type { StaticImageData } from 'next/image';

const context = require.context(
  '../assets/carousel',
  false,
  /\.(apng|avif|bmp|gif|heic|heif|ico|jfif|jpe?g|pjpeg|png|svg|tiff?|webp)$/i
);

export type CarouselSlide = {
  name: string;
  src: string;
  objectPosition: string;
};

function labelFromStem(stem: string): string {
  return stem.replace(/^\d+-/, '').replace(/[-_]+/g, ' ').trim() || 'slide';
}

export const carouselImages: CarouselSlide[] = context
  .keys()
  .sort()
  .map((key) => {
    const mod = context(key) as { default: StaticImageData };
    const stem = key.replace(/^\.\//, '').replace(/\.[^.]+$/i, '');
    return {
      name: labelFromStem(stem),
      src: mod.default.src,
      objectPosition: 'center top',
    };
  });
