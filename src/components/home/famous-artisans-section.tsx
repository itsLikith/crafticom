'use client';

import { Suspense } from 'react';
import { FamousArtisansCarousel } from './famous-artisans-carousel';
import { FamousArtisansSkeleton } from './famous-artisans-skeleton';

export function FamousArtisansSection() {
  return (
    <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
      <div className="mt-8 sm:mt-12">
        <div className="text-center sm:text-left mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#DD6E45] mb-1 sm:mb-1">
            Meet Our Famous Artisans!
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-full sm:max-w-2xl md:max-w-none">
            Discover the masters behind our beautiful handcrafted pieces
          </p>
        </div>
        <div>
          <Suspense fallback={<FamousArtisansSkeleton />}>
            <FamousArtisansCarousel />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
