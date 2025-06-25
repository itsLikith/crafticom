import {CarouselPlugin} from "../../../components/home/special-offers-carousel";

export default function Page() {
  return (
    <div className="p-6">
      <span className="text-2xl flex font-bold mb-4 text-[#DD6E45]">
        Unleash your creativity with unique handmade products
      </span>
      <CarouselPlugin />
    </div>
  );
}