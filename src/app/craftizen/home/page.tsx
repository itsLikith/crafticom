import { SpecialOffersCarousel } from '../../../components/home/special-offers-carousel';
import { FamousArtisansCarousel } from '../../../components/home/famous-artisans-carousel';
import { SpecialOffersSkeleton } from '../../../components/home/special-offers-skeleton';
import { FamousArtisansSkeleton } from '../../../components/home/famous-artisans-skeleton';
import { Suspense } from 'react';
import ArtisanCard from '../../../components/common/artisan-card';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#DD6E45] via-[#E8744F] to-[#DD6E45] bg-clip-text text-transparent">
              Unleash your creativity
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline text-gray-700 mt-2 sm:mt-0 sm:ml-3">
              with unique handmade products
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#DD6E45] to-transparent w-full max-w-md"></div>
            <div className="mx-4 w-2 h-2 bg-[#DD6E45] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#DD6E45] to-transparent w-full max-w-md"></div>
          </div>
        </div>
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center sm:text-left mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#DD6E45] mb-2">
              Today&apos;s Special Offers
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl sm:max-w-none">
              Don&apos;t miss out on these amazing deals from our talented
              artisans
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#DD6E45]/5 to-transparent rounded-2xl -z-10"></div>
            <div className="p-4 sm:p-6 lg:p-8 flex justify-center">
              <Suspense fallback={<SpecialOffersSkeleton />}>
                <SpecialOffersCarousel />
              </Suspense>
            </div>
          </div>
        </section>
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center sm:text-left mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#DD6E45] mb-2">
              Meet Our Famous Artisans!
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl sm:max-w-none">
              Discover the masters behind our beautiful handcrafted pieces
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-[#DD6E45]/5 to-transparent rounded-2xl -z-10"></div>
            <div className="p-4 sm:p-6 lg:p-8">
              <Suspense fallback={<FamousArtisansSkeleton />}>
                <FamousArtisansCarousel />
              </Suspense>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-[#DD6E45]/10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#DD6E45] via-[#E8744F] to-[#DD6E45] bg-clip-text text-transparent">
                Browse by Category
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Explore our diverse collection of handmade treasures organized by
              category
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {[
                'Pottery',
                'Textiles',
                'Jewelry',
                'Woodwork',
                'Paintings',
                'Sculptures',
              ].map((category) => (
                <button
                  key={category}
                  className="bg-gradient-to-r from-[#DD6E45] to-[#E8744F] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm md:text-base hover:shadow-lg hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#DD6E45]/50 focus:ring-offset-2"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <ArtisanCard />
          </div>
        </section>
      </div>
    </div>
  );
}
