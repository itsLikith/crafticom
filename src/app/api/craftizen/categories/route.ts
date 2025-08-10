import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const categories = [
      { id: 1, name: 'Tailoring', image: '/assets/crafts/tailoring.png' },
      { id: 2, name: 'Culinary', image: '/assets/crafts/culinary.png' },
      { id: 3, name: 'Ceramics', image: '/assets/crafts/ceramics.png' },
      { id: 4, name: 'Gifts', image: '/assets/crafts/gifts.png' },
      { id: 5, name: 'Home Decor', image: '/assets/crafts/homedecor.png' },
    ];
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { message: 'Failed to fetch categories' },
      { status: 500 },
    );
  }
}
