import { Button } from '@/components/ui/button';
import { FeaturedItemCard } from '@/components/featured/featured-item-card';

export default function Page() {
  const featuredItems = [
    {
      artisan: {
        name: 'Elara Vance',
        avatar: '/assets/defaults/defaultpfp.png',
      },
      product: {
        name: 'Earthen Vase',
        category: 'POTTERY',
        image: '/assets/crafts/homedecor.png',
        time: '2 days',
        limitedQuantity: 5,
        totalAvailable: 74,
      },
    },
    {
      artisan: {
        name: 'Marcus Chen',
        avatar: '/assets/defaults/defaultpfp.png',
      },
      product: {
        name: 'Handwoven Scarf',
        category: 'TEXTILES',
        image: '/assets/crafts/tailoring.png',
        time: '5 hours',
        limitedQuantity: 3,
        totalAvailable: 42,
      },
    },
    {
      artisan: {
        name: 'Sofia Rodriguez',
        avatar: '/assets/defaults/defaultpfp.png',
      },
      product: {
        name: 'Artisan Jewelry Set',
        category: 'JEWELRY',
        image: '/assets/crafts/gifts.png',
        time: '1 day',
        limitedQuantity: 2,
        totalAvailable: 28,
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Featured Artisan Crafts
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Limited-time treasures from our artisans.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <FeaturedItemCard
              key={index}
              artisan={item.artisan}
              product={item.product}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore More Amazing Crafts
            </h2>
            <p className="text-gray-600 mb-6">
              Browse our complete collection of handcrafted items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white font-semibold px-6 py-3 rounded-lg">
                Browse All Crafts
              </Button>
              <Button
                variant="secondary"
                className="text-gray-700 font-semibold px-6 py-3 rounded-lg"
              >
                Meet Our Artisans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
