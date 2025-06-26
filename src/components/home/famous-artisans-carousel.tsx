import * as React from 'react';

import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Button } from '../ui/button';

export function FamousArtisansCarousel() {
  const artisans = [
    {
      name: 'Artisan 1',
      id: 'id-1',
      about: 'Expert in woodworking and fine furniture.',
      profilePic: '/background.png',
    },
    {
      name: 'Artisan 2',
      id: 'id-2',
      about: 'Master of traditional pottery techniques.',
      profilePic: '/background.png',
    },
    {
      name: 'Artisan 3',
      id: 'id-3',
      about: 'Renowned for hand-woven textiles.',
      profilePic: '/background.png',
    },
    {
      name: 'Artisan 4',
      id: 'id-4',
      about: 'Creator of custom leather goods.',
      profilePic: '/background.png',
    },
    {
      name: 'Artisan 5',
      id: 'id-5',
      about: 'Specialist in glassblowing and sculpture.',
      profilePic: '/background.png',
    },
  ];

  return (
    <section className="md:px-2 lg:px-4">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent className="gap-4">
          {artisans.map((artisan) => (
            <CarouselItem
              key={artisan.id}
              className="basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center p-6 space-y-4 text-center">
                  <img
                    src={artisan.profilePic}
                    alt={`Profile of ${artisan.name}`}
                    className="w-24 h-24 rounded-full object-cover shadow"
                  />
                  <h3 className="text-lg font-semibold">{artisan.name}</h3>
                  <p className="text-sm text-gray-600">{artisan.about}</p>
                  <Button size="sm" variant="secondary">
                    Know more
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
