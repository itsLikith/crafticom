export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        {/* Hero Section Loading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="h-12 sm:h-16 md:h-20 lg:h-24 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-8 sm:h-10 md:h-12 lg:h-14 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Special Offers Loading */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="h-8 sm:h-10 md:h-12 bg-gray-200 rounded-lg mb-4 w-3/4"></div>
          <div className="h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 rounded-xl"></div>
        </section>

        {/* Browse by Category Loading */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="bg-white/70 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg">
            <div className="h-8 sm:h-10 md:h-12 bg-gray-200 rounded-lg mb-4 w-1/2 mx-auto"></div>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-12 sm:h-14 md:h-16 bg-gray-200 rounded-lg"
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Famous Artisans Loading */}
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="h-8 sm:h-10 md:h-12 bg-gray-200 rounded-lg mb-4 w-3/4"></div>
          <div className="h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-200 rounded-xl"></div>
        </section>
      </div>
    </div>
  );
}
