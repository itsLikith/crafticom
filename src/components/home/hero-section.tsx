export function HeroSection() {
  return (
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
  );
}
