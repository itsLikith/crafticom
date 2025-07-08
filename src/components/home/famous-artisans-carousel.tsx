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
    <section className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
      <Suspense fallback={<FamousArtisansSkeleton />}>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            skipSnaps: false,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {artisans.map((artisan) => (
              <CarouselItem
                key={artisan.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md bg-white overflow-hidden h-full min-h-[420px] sm:min-h-[450px] relative">
                  {/* Gradient overlay for visual appeal */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                  <CardContent className="flex flex-col items-center justify-between p-6 sm:p-8 text-center h-full relative z-10">
                    {/* Profile Image Section */}
                    <div className="relative mb-6 sm:mb-8">
                      <div className="relative">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-3xl overflow-hidden border-4 border-gradient-to-r from-blue-200 to-orange-200 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                          <Image
                            src={artisan.profilePic}
                            alt={`Profile of ${artisan.name}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            width={144}
                            height={144}
                          />
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-200 to-orange-200 opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                      </div>
                    </div>

                    {/* Quote Section */}
                    <div className="flex-1 mb-6 sm:mb-8">
                      <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 italic leading-relaxed font-medium min-h-[120px] sm:min-h-[140px] flex items-center">
                        <span className="relative">
                          <span className="text-4xl text-orange-300 absolute -top-2 -left-2">
                            `&quot;`,
                          </span>
                          {artisan.about}
                          <span className="text-4xl text-orange-300 absolute -bottom-4 -right-1">
                            `&quot;`,
                          </span>
                        </span>
                      </blockquote>
                    </div>

                    {/* Name Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        -{artisan.name}
                      </p>
                    </div>

                    {/* Button Section */}
                    <Button className="bg-gradient-to-r from-[#DD6E45] to-[#E8744F] hover:from-[#E8744F] hover:to-[#DD6E45] text-white font-semibold px-8 py-3 rounded transition-all duration-300 hover:shadow-xl hover:scale-105 transform w-full sm:w-auto min-w-[140px] group-hover:animate-pulse">
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
