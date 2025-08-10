'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export function BrowseByCategorySection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setError(null);
        const response = await axios.get<Category[]>(
          '/api/craftizen/categories',
        );
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to load categories. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [isLoading]);

  return (
    <section className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-lg border border-[#DD6E45]/10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#DD6E45] via-[#E8744F] to-[#DD6E45] bg-clip-text text-transparent">
                Browse by Category
              </span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto">
              Explore our diverse collection of handmade treasures organized by
              category
            </p>
          </div>

          {/* Categories Grid */}
          {error ? (
            <p className="text-red-900">Failed to fetch categories</p>
          ) : (
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.name} category`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, (max-width: 1024px) 200px, (max-width: 1280px) 220px, (max-width: 1536px) 240px, 260px"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
