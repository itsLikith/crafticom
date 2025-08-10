import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

interface RequestSpecialOffers {
  location: string;
}

export async function POST(params: RequestSpecialOffers) {
  try {
    dbConnect();
    const location = params.location;
  } catch (error) {
    console.log('Error: ', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch Special offers',
      },
      {
        status: 500,
      },
    );
  }
}
