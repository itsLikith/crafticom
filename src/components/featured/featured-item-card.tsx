import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface FeaturedItemCardProps {
  artisan?: {
    name: string;
    avatar: string;
  };
  product?: {
    name: string;
    category: string;
    image: string;
    time: string;
  };
}

export function FeaturedItemCard({
  artisan = {
    name: 'Elara Vance',
    avatar: '/assets/defaults/defaultpfp.png',
  },
  product = {
    name: 'Earthen Vase',
    category: 'SAWEN',
    image: '/assets/crafts/homedecor.png',
    time: '2 days',
  },
}: FeaturedItemCardProps) {
  return (
    <div className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 70vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 p-6 h-80 flex flex-col justify-between">
        {/* Top Section - Artisan Info */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
            <Image
              src={artisan.avatar}
              alt={artisan.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <span className="text-white font-medium text-lg">{artisan.name}</span>
        </div>

        {/* Bottom Section - Product Info */}
        <div className="bg-black/75 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Product Details */}
            <div className="flex-1">
              <div className="text-gray-300 text-sm font-medium mb-1">
                {product.category}
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                {product.name}
              </h3>
            </div>

            {/* Right Side - Actions */}
            <div className="flex flex-col items-end space-y-2">
              {/* Stock Info */}
              <div className="text-white text-right">
                <div className="text-2xl font-bold">{product.time}</div>
                <div className="text-xs text-gray-300">Time Left</div>
              </div>

              {/* Shop Now Button */}
              <Button
                variant="secondary"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg text-sm"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
