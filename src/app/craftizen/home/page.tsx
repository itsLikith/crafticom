import { SpecialOffersCarousel } from '../../../components/home/special-offers-carousel';
import { FamousArtisansCarousel } from '../../../components/home/famous-artisans-carousel';
import { ArtisanSkeleton } from '../../../components/home/artisans-skeleton';

export default function Page() {
  return (
    <div className="p-6">
      <span className="text-2xl flex font-bold mb-4 text-[#DD6E45] justify-center">
        Unleash your creativity with unique handmade products
      </span>
      <hr className='mb-4' />
      <div className="justify-center mb-10">
        <span className="text-2xl flex font-bold mb-4 text-[#DD6E45]">Today&apos;s special offers</span>
        <SpecialOffersCarousel />
      </div>
      <div className="famous-artisans mb-10">
        <span className="text-2xl flex font-bold mb-2 text-[#DD6E45]">
          Meet our famous Artisans !
        </span>
        <FamousArtisansCarousel />
      </div>
      <div>
        <span className='text-2xl flex font-bold mb-2 text-[#DD6E45] justify-center'>
          Browse by category
        </span>
        <ArtisanSkeleton />
      </div>
    </div>
  );
}
