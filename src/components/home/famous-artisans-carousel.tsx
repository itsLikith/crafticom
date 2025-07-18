'use client';

import * as React from 'react';
import { FamousArtisansSkeleton } from './famous-artisans-skeleton';
import { Suspense } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export function FamousArtisansCarousel() {
  const artisans = [
    {
      name: 'Maria Santos',
      id: 'id-1',
      about:
        'Expert in woodworking and fine furniture with 15+ years of experience creating custom pieces.',
      profilePic: '/background.png',
    },
    {
      name: 'Kenji Yamamoto',
      id: 'id-2',
      about:
        'Master of traditional pottery techniques passed down through generations, specializing in ceramic art.',
      profilePic: '/background.png',
    },
    {
      name: 'Isabella Rodriguez',
      id: 'id-3',
      about:
        'Renowned for hand-woven textiles and contemporary fabric designs with sustainable materials.',
      profilePic: '/background.png',
    },
    {
      name: 'Ahmed Hassan',
      id: 'id-4',
      about:
        'Creator of custom leather goods with intricate hand-tooled designs and traditional craftsmanship.',
      profilePic: '/background.png',
    },
    {
      name: 'Emma Thompson',
      id: 'id-5',
      about:
        'Specialist in glassblowing and contemporary glass sculpture art with modern artistic vision.',
      profilePic: '/background.png',
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
      <Suspense fallback={<FamousArtisansSkeleton />}>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
            {artisans.map((artisan) => (
              <CarouselItem
                key={artisan.id}
                className="pl-2 sm:pl-3 md:pl-4 basis-full"
              >
                <div className="flex flex-col lg:flex-row items-stretch bg-[#23293a] border border-[#23293a] rounded-xl shadow-sm h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[380px] overflow-hidden group transition-all duration-500 hover:-translate-y-2 relative max-w-3xl xl:max-w-2xl 2xl:max-w-xl mx-auto">
                  {/* Profile Image */}
                  <div className="relative w-full lg:w-1/2 flex-shrink-0">
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-full w-full">
                      <Image
                        fill
                        className="object-cover rounded-t-xl lg:rounded-none lg:rounded-s-xl"
                        src={artisan.profilePic}
                        alt={`Profile of ${artisan.name}`}
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-6 xl:p-6 flex-1 text-left bg-transparent">
                    <h5 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-3xl xl:text-3xl font-bold tracking-tight text-white leading-tight">
                      {artisan.name}
                    </h5>
                    <p className="text-base sm:text-lg lg:text-lg xl:text-lg font-normal text-gray-300 leading-relaxed break-words">
                      {artisan.about}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Suspense>
    </section>
  );
}
