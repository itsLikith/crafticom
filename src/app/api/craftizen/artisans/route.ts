import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({
      status: 'success',
      message: 'Craftizen Artisans API is working',
    });
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
