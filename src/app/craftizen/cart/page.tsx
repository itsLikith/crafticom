import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import Image from 'next/image';

export default function Page() {
  // Mock cart items - replace this with your actual cart data
  const cartItems = [
    {
      id: 1,
      name: "Arts & Paintings",
      description: "Beautiful handcrafted art pieces for your home decoration",
      image: "/assets/crafts/arts.png",
      price: "$25.00"
    },
    {
      id: 2,
      name: "Home Decor",
      description: "Elegant decorative items to enhance your living space",
      image: "/assets/crafts/homedecor.png",
      price: "$35.00"
    },
    {
      id: 3,
      name: "Food Items",
      description: "Delicious homemade food items and preserves",
      image: "/assets/crafts/food.png",
      price: "$15.00"
    },
    {
      id: 4,
      name: "Kids Items",
      description: "Fun and educational toys for children",
      image: "/assets/crafts/kids.png",
      price: "$20.00"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      {/* Grid layout for cart items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-md">
            <div className="w-full h-28 sm:h-32 md:h-36 rounded-t-lg overflow-hidden">
              <Image 
                className="w-full h-full object-cover" 
                alt={item.name} 
                src={item.image}
                width={400}
                height={300}
              />
            </div>
            <div className="p-3 sm:p-4">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">{item.price}</span>
                <Button className="text-sm px-3 py-2">Remove</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Cart Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Items ({cartItems.length})</span>
          <span>$95.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>$100.00</span>
        </div>
        <Button className="w-full mt-4">Proceed to Checkout</Button>
      </div>
    </div>
  );
}
