import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI as string);

    // Test the connection by fetching a simple document
    const db = mongoose.connection;

    return NextResponse.json({
      status: 'success',
      message: 'MongoDB connection successful',
      database: db.name,
    });

    mongoose.connection.close();
  } catch (error: unknown) {
    let message = 'An unknown error occurred';
    // Check if the error is an instance of the Error class
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json(
      {
        status: 'error',
        message,
      },
      { status: 500 },
    );
  }
}
