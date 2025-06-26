'use client';

import Image from 'next/image';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../components/ui/carousel';

export function SpecialOffersCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const images = [
    { url: '/background.png', alt: 'Project 1' },
    { url: '/background.png', alt: 'Project 2' },
    { url: '/background.png', alt: 'Project 3' },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.url}
              alt={image.alt}
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
