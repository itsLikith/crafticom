import { SpecialOffersCarousel } from '../../../components/home/special-offers-carousel';
import { FamousArtisansCarousel } from '../../../components/home/famous-artisans-carousel';
import { SpecialOffersSkeleton } from '../../../components/home/special-offers-skeleton';
import { FamousArtisansSkeleton } from '../../../components/home/famous-artisans-skeleton';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#DD6E45] via-[#E8744F] to-[#DD6E45] bg-clip-text text-transparent">
              Unleash your creativity
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline text-gray-700 mt-2 sm:mt-0 sm:ml-3">
              with unique handmade products
            </span>
          </h1>
          <div className="flex items-center justify-center mt-4 sm:mt-6 md:mt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#DD6E45] to-transparent w-full max-w-xs sm:max-w-sm md:max-w-md"></div>
            <div className="mx-2 sm:mx-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#DD6E45] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#DD6E45] to-transparent w-full max-w-xs sm:max-w-sm md:max-w-md"></div>
          </div>
        </div>

        {/* Special Offers Section */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="text-center sm:text-left mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#DD6E45] mb-1 sm:mb-2">
              Today&apos;s Special Offers
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-full sm:max-w-2xl md:max-w-none">
              Don&apos;t miss out on these amazing deals from our talented
              artisans
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

        {/* Empty section - keeping as is */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"></section>

        {/* Browse by Category Section */}
        <section className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-[#DD6E45]/10">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#DD6E45] via-[#E8744F] to-[#DD6E45] bg-clip-text text-transparent">
                Browse by Category
              </span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 max-w-xl sm:max-w-2xl mx-auto">
              Explore our diverse collection of handmade treasures organized by
              category
            </p>
            {/* Skeleton for Browse by Category */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#DD6E45] to-[#E8744F] opacity-60 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Famous Artisans Section */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="mt-8 sm:mt-12">
            <div className="text-center sm:text-left mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#DD6E45] mb-1 sm:mb-2">
                Meet Our Famous Artisans!
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-full sm:max-w-2xl md:max-w-none">
                Discover the masters behind our beautiful handcrafted pieces
              </p>
            </div>
            {/* Skeleton for Famous Artisans Section */}
            <div>
              <Suspense fallback={<FamousArtisansSkeleton />}>
                <FamousArtisansCarousel />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
