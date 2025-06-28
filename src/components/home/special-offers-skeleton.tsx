export function SpecialOffersSkeleton() {
  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Navigation Arrows Skeleton */}
        <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        {/* Cards Container */}
        <div className="flex gap-4 sm:gap-6 px-12 sm:px-16 lg:px-20 py-4">
          {/* Generate skeleton cards for different screen sizes */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`flex-none w-64 sm:w-72 md:w-80 lg:w-96 ${
                index >= 2 ? 'hidden md:block' : ''
              } ${index >= 3 ? 'hidden lg:block' : ''}`}
            >
              {/* Card Skeleton */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {/* Image Skeleton */}
                <div className="relative">
                  <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>

                  {/* Discount Badge Skeleton */}
                  <div className="absolute top-3 left-3">
                    <div className="w-16 h-8 bg-red-200 rounded-full animate-pulse"></div>
                  </div>

                  {/* Heart Icon Skeleton */}
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Content Skeleton */}
                <div className="p-4 sm:p-5 lg:p-6">
                  {/* Title Skeleton */}
                  <div className="space-y-2 mb-3">
                    <div className="h-5 sm:h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  </div>

                  {/* Description Skeleton */}
                  <div className="space-y-2 mb-4">
                    <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                  </div>

                  {/* Price and Rating Skeleton */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="h-6 sm:h-7 bg-gray-200 rounded animate-pulse w-20"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 bg-gray-200 rounded animate-pulse"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Button Skeleton */}
                  <div className="h-10 sm:h-11 lg:h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots Skeleton */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse ${
              index === 0 ? 'bg-[#DD6E45]/30' : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
