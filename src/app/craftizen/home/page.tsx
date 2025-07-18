import { HeroSection } from '../../../components/home/hero-section';
import { SpecialOffersSection } from '../../../components/home/special-offers-section';
import { BrowseByCategorySection } from '../../../components/home/browse-by-category-section';
import { FamousArtisansSection } from '../../../components/home/famous-artisans-section';

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        <HeroSection />
        <SpecialOffersSection />
        <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"></section>
        <BrowseByCategorySection />
        <FamousArtisansSection />
      </div>
    </div>
  );
}
