'use client';

import Image from "next/image";

export default function ArtisanCard(

) {
  const handleViewProfile = () => {};

  return (
    <div className="w-80 p-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out">
      <Image
        width={150}
        height={150}
        className="w-full h-40 object-cover rounded-t-lg"
        alt="Card Image"
        src="https://via.placeholder.com/150"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">Aritisan name</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          ante sit amet tellus ornare tincidunt.
        </p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={handleViewProfile}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
