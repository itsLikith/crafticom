'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  HomeIcon,
  ArrowLeftIcon,
  SearchIcon,
  HelpCircleIcon,
} from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#FFEBDD_0%,_#FBF6ED_50%,_#FFFCF1_100%)] flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main 404 Content */}
        <div className="mb-8">
          {/* Large 404 with craft-themed styling */}
          <div className="relative mb-6">
            <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 drop-shadow-sm">
              404
            </h1>
            {/* Decorative craft elements */}
            <div className="absolute -top-4 -left-4 text-4xl">🎨</div>
            <div className="absolute -top-2 -right-8 text-3xl">✂️</div>
            <div className="absolute -bottom-2 left-8 text-3xl">🧵</div>
            <div className="absolute -bottom-4 -right-4 text-4xl">🏺</div>
          </div>

          {/* Main message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! This Page Went Missing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            It looks like the page you're searching for doesn't exist.
          </p>
        </div>

        {/* Action Cards */}
        <div className="flex justify-center gap-4 mb-8">
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => router.back()}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <ArrowLeftIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Go Back</h3>
              <p className="text-sm text-gray-600">Return to previous page</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => router.push('/help')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <HelpCircleIcon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Help</h3>
              <p className="text-sm text-gray-600">Contact our support team</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer message */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Lost? Don't worry - every great craft starts with exploring the
            unknown! ✨
          </p>
        </div>
      </div>
    </div>
  );
}
