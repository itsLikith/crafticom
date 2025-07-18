'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#DD6E45] mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#DD6E45] text-white rounded-lg hover:bg-[#E8744F] transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
