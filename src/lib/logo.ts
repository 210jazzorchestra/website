/// <reference types="webpack-env" />
import type { StaticImageData } from 'next/image';

const context = require.context(
  '../assets/logo',
  false,
  /\.(apng|avif|bmp|gif|heic|heif|ico|jfif|jpe?g|pjpeg|png|svg|tiff?|webp)$/i,
);

const keys = context.keys().sort();
if (keys.length === 0) {
  throw new Error(
    'Add at least one image under src/assets/logo/ (any file name).',
  );
}

const logo: StaticImageData = (context(keys[0]!) as { default: StaticImageData })
  .default;

export default logo;
