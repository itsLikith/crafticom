'use client';

import Image from 'next/image';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

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
      className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xs xl:max-w-sm 2xl:max-w-sm mx-auto px-4 sm:px-6 lg:px-8"
    >
      <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-2 sm:pl-3 md:pl-4 basis-full">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-sm bg-gray-100">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, (max-width: 1024px) 380px, (max-width: 1280px) 420px, 420px"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
