import ExploreButton from '../components/landing/ExploreButton';
import Script from 'next/script';

export default function LandingPage() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Crafticom',
          description: 'Platform for Artisans to Showcase Handmade Products',
          url: 'https://crafticom.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate:
                'https://crafticom.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        })}
      </Script>
      <div className="landing-page h-screen w-full overflow-y-scroll bg-white">
        <div className="flex w-full h-full bg-black lg shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-black/80">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
              Discover Handcrafted Treasures
            </h2>
            <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-200 text-center max-w-xl">
              Unleash your creativity with unique handmade products from
              passionate artisans.
            </p>
            <div className="mt-6 flex w-full justify-center">
              <ExploreButton />
            </div>
          </div>
          <div className="w-1/2 hidden md:flex items-center justify-center bg-white landing-page-image bg-[url('/assets/landingpage/landing.png')] bg-cover bg-left bg-no-repeat">
            {/* image here */}
          </div>
        </div>
        <div className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Artisan Registration
          </h2>
          <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-700">
            This landing screen allows artisans to register and list their
            handmade products, including crafts, home décor, and food items.
            Artisans can showcase their unique creations and connect with
            potential buyers through a seamless and engaging interface. The
            platform supports storytelling, personalized artisan pages, secure
            payments, and user feedback, fostering a strong emotional and
            commercial bond between the maker and the buyer.
          </p>
        </div>
        <div className="p-6 md:p-10">
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Product Discovery
          </h1>
          <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-700">
            Explore and discover a variety of handmade products in a visually
            appealing interface.
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-4 flex-wrap">
            <div className="rounded-md p-6 bg-gray-100 min-w-[220px] flex-1 shadow">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                Crafted Treasures
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Discover unique handmade crafts that tell a story.
              </p>
            </div>
            <div className="rounded-md p-6 bg-gray-100 min-w-[220px] flex-1 shadow">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                Home Delights
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Explore artisanal home décor items that add character to your
                space.
              </p>
            </div>
            <div className="rounded-md p-6 bg-gray-100 min-w-[220px] flex-1 shadow">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                Taste Adventures
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Indulge in delicious homemade food made with love and passion.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-10">
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Exciting Features
          </h1>
          <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl">
            Discover the unique elements that make our platform stand out from
            the rest!
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-4 flex-wrap">
            <div className="rounded-md p-6 bg-gray-100 min-w-[220px] flex-1 shadow">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                Artisan Stories
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Craft a narrative behind each product, forging emotional bonds
                with buyers.
              </p>
            </div>
            <div className="rounded-md p-6 bg-gray-100 min-w-[220px] flex-1 shadow">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                Personalized Artisan Pages
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Tailor your page to showcase your brand and products in a unique
                way.
              </p>
            </div>
            <div className="rounded-md p-6 bg-gray-100 min-w-[220px] flex-1 shadow">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                Secure Payments
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Shop with confidence knowing your transactions are safe and
                protected.
              </p>
            </div>
            <div className="rounded-md p-6 bg-gray-100 min-w-[220px] flex-1 shadow">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                User Feedback
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Share your experiences and help artisans improve their craft.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-10">
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Personalized Artisan Pages
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-700">
            Empower artisans to create personalized pages showcasing their
            products and brand identity. Highlight their craftsmanship and
            unique stories through a seamless interface that captivates buyers.
            The platform supports storytelling, secure payments, and user
            feedback, fostering a strong emotional and commercial connection
            between artisans and buyers.
          </p>
        </div>
        <div className="p-6 md:p-10">
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Secure Payments
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-700">
            Integrates secure payment gateways to facilitate safe and convenient
            transactions between buyers and artisans.
          </p>
        </div>
      </div>
    </>
  );
}
