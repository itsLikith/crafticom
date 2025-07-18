'use client';

import { Suspense } from 'react';
import { SpecialOffersCarousel } from './special-offers-carousel';
import { SpecialOffersSkeleton } from './special-offers-skeleton';

export function SpecialOffersSection() {
  return (
    <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
      <div className="text-center sm:text-left mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#DD6E45] mb-1 sm:mb-2">
          Today&apos;s Special Offers
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-full sm:max-w-2xl md:max-w-none">
          Don&apos;t miss out on these amazing deals from our talented artisans
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#DD6E45]/5 to-transparent rounded-xl sm:rounded-2xl -z-10"></div>
        <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex justify-center">
          <Suspense fallback={<SpecialOffersSkeleton />}>
            <SpecialOffersCarousel />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
