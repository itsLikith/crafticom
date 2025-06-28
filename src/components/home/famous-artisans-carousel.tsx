import * as React from 'react';
import { FamousArtisansSkeleton } from './famous-artisans-skeleton';
import { Suspense } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Button } from '../ui/button';

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

  return (
    <section className="md:px-2 lg:px-4">
      <Suspense fallback={<FamousArtisansSkeleton />}>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent className="gap-4 sm:gap-6">
            {artisans.map((artisan) => (
              <CarouselItem
                key={artisan.id}
                className="basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden h-full">
                  <CardContent className="flex flex-col items-center p-6 text-center h-full">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border-4 border-blue-200 shadow-lg">
                        <Image
                          src={artisan.profilePic}
                          alt={`Profile of ${artisan.name}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          width={128}
                          height={128}
                        />
                      </div>
                    </div>
                    <div className="flex-1 mb-6">
                      <blockquote className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-4 font-medium">
                        &quot;{artisan.about}&quot;
                      </blockquote>
                    </div>
                    <div className="mb-6">
                      <p className="text-lg sm:text-xl font-bold text-gray-800">
                        -{artisan.name}
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-[#DD6E45] to-[#E8744F] hover:from-[#E8744F] hover:to-[#DD6E45] text-white font-medium px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Suspense>
    </section>
  );
}
