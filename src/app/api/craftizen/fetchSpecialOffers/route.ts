import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';

export async function GET(params: { location: string }) {
  try {
    dbConnect();
    console.log(params.location);

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
