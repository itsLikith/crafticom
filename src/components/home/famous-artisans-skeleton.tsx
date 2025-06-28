export function FamousArtisansSkeleton() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`flex-none w-56 sm:w-64 md:w-72 lg:w-80 ${
                index >= 2 ? 'hidden sm:block' : ''
              } ${index >= 3 ? 'hidden md:block' : ''} ${
                index >= 4 ? 'hidden lg:block' : ''
              }`}
            >
              {/* Artisan Card Skeleton */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                {/* Profile Image Skeleton */}
                <div className="relative">
                  <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>

                  {/* Badge/Status Skeleton */}
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 bg-green-200 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Artisan Info Skeleton */}
                <div className="p-4 sm:p-5 lg:p-6">
                  {/* Profile Picture */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 rounded-full animate-pulse mr-3"></div>
                    <div className="flex-1">
                      {/* Name Skeleton */}
                      <div className="h-5 sm:h-6 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>
                      {/* Specialty Skeleton */}
                      <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>

                  {/* Location Skeleton */}
                  <div className="flex items-center mb-3">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse mr-2"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                  </div>

                  {/* Stats Skeleton */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="text-center">
                        <div className="h-5 sm:h-6 bg-gray-200 rounded animate-pulse mb-1"></div>
                        <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  {/* Rating Skeleton */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex space-x-1 mr-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 bg-yellow-200 rounded animate-pulse"
                        ></div>
                      ))}
                    </div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div>
                  </div>

                  {/* Skills/Tags Skeleton */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-6 sm:h-7 bg-gray-200 rounded-full animate-pulse"
                        style={{ width: `${Math.random() * 40 + 60}px` }}
                      ></div>
                    ))}
                  </div>

                  {/* Action Buttons Skeleton */}
                  <div className="flex gap-2">
                    <div className="flex-1 h-9 sm:h-10 lg:h-11 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots Skeleton */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse ${
              index === 1 ? 'bg-[#DD6E45]/30' : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
