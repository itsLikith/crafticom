import { NextResponse } from 'next/server';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: ReturnType<typeof initializeApp>;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export async function GET() {
  try {
    // Try to get Firestore instance to test config
    const db = getFirestore(app);
    // Optionally, try a simple operation (like listing collections)
    // await listCollections(db); // Uncomment if you want a real test

    return NextResponse.json({
      success: true,
      message: 'Firebase configuration is working.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Firebase configuration failed.',
        error: String(error),
      },
      { status: 500 },
    );
  }
}
