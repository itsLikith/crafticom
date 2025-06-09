import Image from 'next/image';

export default function Page() {
  return (
    <main className="bg-[#FFF7ED] min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <nav className="flex gap-8 text-[#3B2F1D] font-medium">
          <a href="#">Shop</a>
          <a href="#">About</a>
        </nav>
        <div className="font-bold text-2xl">LOGO</div>
        <nav className="flex gap-6 items-center text-[#3B2F1D]">
          <a href="#">Featured</a>
          <a href="#">Reviews</a>
          <button>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#D97B3E] mb-4 tracking-wide">
          UNLEASH YOUR CREATIVITY WITH UNIQUE <br /> HANDMADE PRODUCTS
        </h1>
        <button className="bg-[#FFD600] text-[#3B2F1D] font-bold px-8 py-2 rounded-full shadow mt-2 mb-8 hover:bg-yellow-300 transition">
          Shop now
        </button>
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <Image
              src="/images/hero-craft.jpg"
              alt="Handmade crafts"
              width={800}
              height={350}
              className="rounded-[100px] object-cover w-full h-[220px] md:h-[350px] shadow-lg"
              priority
            />
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
              {/* Decorative SVG or lines can be added here */}
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Registration */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-12">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-[#D97B3E] mb-2">
            Artisan Registration
          </h2>
          <p className="text-[#3B2F1D] mb-4">
            This leading screen allows artisans to register and list their
            handmade products, including crafts, home décor, and accessories.
            Each artisan shares how their creations connect with potential
            buyers through a seamless and secure platform. The portal supports
            storytelling, real user feedback, integrates a strong and engaged
            local community, fostering the maker and the buyer.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FFD600] text-[#3B2F1D] font-bold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">
              Sign up
            </button>
            <button className="bg-white border border-[#D97B3E] text-[#D97B3E] font-bold px-6 py-2 rounded-full hover:bg-[#FFF3E0] transition">
              Explore more
            </button>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <Image
            src="/images/artisan-pottery.jpg"
            alt="Artisan at work"
            width={400}
            height={300}
            className="rounded-[60px] object-cover w-full h-[220px] md:h-[300px] shadow-lg"
          />
        </div>
      </section>

      {/* Meet Our Famous Artisans */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold text-[#D97B3E] mb-6 text-center">
          Meet Our Famous Artisans !
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-4 w-48 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                <Image
                  src={`/images/artisan${i}.jpg`}
                  alt={`Artisan ${i}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs text-center text-[#3B2F1D] mb-1">
                &ldquo;Lorem Ipsum Dolor Sit Amet Ullamcorper Nisi Metus
                Mattis.&rdquo;
              </p>
              <span className="text-xs text-[#D97B3E] font-semibold">
                - Name
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Special Offers */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold text-[#D97B3E] mb-6 text-center">
          Today&apos;s Special Offers
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-[#FFD600] rounded-2xl p-6 flex-1 flex flex-col items-center shadow">
            <h3 className="text-lg font-bold mb-2 text-[#3B2F1D]">
              60% OFF ON BREADS
            </h3>
            <p className="mb-2 text-[#3B2F1D]">All You Want!</p>
            <Image
              src="/images/bread.jpg"
              alt="Bread"
              width={120}
              height={80}
              className="rounded-lg"
            />
          </div>
          <div className="bg-[#FFB6A3] rounded-2xl p-6 flex-1 flex flex-col items-center shadow">
            <h3 className="text-lg font-bold mb-2 text-[#3B2F1D]">
              FREE SHIPPING
            </h3>
            <p className="mb-2 text-[#3B2F1D]">25% Save Off</p>
            <Image
              src="/images/icecream.jpg"
              alt="Ice Cream"
              width={120}
              height={80}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Browse By Category */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold text-[#D97B3E] mb-6 text-center">
          Browse By Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {[
            { name: 'Artisan Food', items: 200, img: '/images/cat-food.jpg' },
            {
              name: 'Handmade Crafts',
              items: 500,
              img: '/images/cat-crafts.jpg',
            },
            { name: 'Home Decor', items: 350, img: '/images/cat-decor.jpg' },
            { name: 'Eco-Friendly', items: 180, img: '/images/cat-eco.jpg' },
            {
              name: 'Festival Specials',
              items: 200,
              img: '/images/cat-festival.jpg',
            },
            {
              name: 'Traditional Textiles',
              items: 600,
              img: '/images/cat-textiles.jpg',
            },
            {
              name: 'Arts & Drawings',
              items: 330,
              img: '/images/cat-arts.jpg',
            },
            {
              name: 'Homemade Jewelry',
              items: 180,
              img: '/images/cat-jewelry.jpg',
            },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-4 flex flex-col items-center"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                width={100}
                height={100}
                className="rounded-full mb-2 object-cover w-20 h-20"
              />
              <span className="text-[#D97B3E] font-bold">
                {cat.items} + Items
              </span>
              <p className="text-xs text-[#3B2F1D] text-center">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Stories */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold text-[#D97B3E] mb-6">
          Featured Stories
        </h2>
        <p className="mb-6 text-[#3B2F1D]">
          Discover Unique Handmade Treasures, Each With A Story Worth Telling
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <Image
              src="/images/story-bowl.jpg"
              alt="Ceramic Bowl"
              width={400}
              height={200}
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h3 className="font-bold text-[#3B2F1D] mb-1">
                Hand-Thrown Ceramic Bowl
              </h3>
              <p className="text-xs text-[#3B2F1D]">
                Inspired By Ancient Techniques Passed Through Generations...
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <Image
              src="/images/story-scarf.jpg"
              alt="Wool Scarf"
              width={400}
              height={200}
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h3 className="font-bold text-[#3B2F1D] mb-1">
                Handwoven Wool Scarf
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow overflow-hidden flex-1">
              <Image
                src="/images/story-honey.jpg"
                alt="Organic Honey"
                width={400}
                height={100}
                className="object-cover w-full h-20"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#3B2F1D] mb-1">Organic Honey</h3>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow overflow-hidden flex-1">
              <Image
                src="/images/story-bread.jpg"
                alt="Sourdough Bread"
                width={400}
                height={100}
                className="object-cover w-full h-20"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#3B2F1D] mb-1">
                  Artisan Sourdough Bread
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="px-4 py-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#3B2F1D] mb-4">
            Customer Reviews
          </h2>
          <div className="space-y-4">
            {['Eshan B', 'K Pinda'].map((name, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4">
                <p className="text-[#3B2F1D] mb-2">
                  Lorem ipsum dolor sit amet, consectetur lorem gravida elit
                  sed, convallis vulputate erat, ac condimentum sapien sodales
                  et. Aenean eget ligula. Lorem ipsum dolor sit amet,
                  consectetur.
                </p>
                <span className="font-bold text-[#D97B3E]">{name}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-[#FFD600] text-[#3B2F1D] font-bold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            Customer Reviews
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/review-artisan.jpg"
            alt="Customer review"
            width={350}
            height={350}
            className="rounded-2xl object-cover w-full max-w-xs"
          />
        </div>
      </section>
    </main>
  );
}
