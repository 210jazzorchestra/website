/// <reference types="webpack-env" />
import type { StaticImageData } from 'next/image';

const context = require.context(
  '../assets/bio-photo',
  false,
  /\.(apng|avif|bmp|gif|heic|heif|ico|jfif|jpe?g|pjpeg|png|svg|tiff?|webp)$/i
);

const keys = context.keys().sort();
if (keys.length === 0) {
  throw new Error(
    'Add at least one image under src/assets/bio-photo/ (any file name).'
  );
}

const bioPhoto: StaticImageData = (
  context(keys[0]!) as { default: StaticImageData }
).default;

export default bioPhoto;
