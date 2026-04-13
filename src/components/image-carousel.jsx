'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useIsMobile } from '@/hooks/useIsMobile';

const ImageCarousel = ({ images }) => {
  const isMobile = useIsMobile();

  return (
    <Carousel
      showThumbs={false}
      height='80vh'
      autoPlay
      infiniteLoop
      interval={5000}
      transitionTime={1000}
      showIndicators={false}
      showStatus={false}
      showArrows={false}
    >
      {images.map((item) => (
        <img
          src={item.src}
          key={item.name}
          alt={item.name}
          style={{
            maxHeight: isMobile ? undefined : 'calc(100vh - 320px)',
            height: isMobile ? 'calc(100vh - 550px)' : 'auto',
            width: '100%',
            objectFit: 'cover',
            objectPosition: isMobile ? item.objectPosition : undefined,
          }}
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
