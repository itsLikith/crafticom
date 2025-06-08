import Image from 'next/image';
import SignupForm from './SignupForm';
import SignupImage from './Signup.png';

export default function SignupPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('/bg-craft.jpg')] bg-cover bg-center bg-no-repeat px-2 py-6">
      <div className="w-full max-w-4xl bg-gradient-to-br from-[#ffe5d0] to-[#fff7ef] rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden">
        {/* Left: Image */}
        <div className="hidden md:flex flex-1 items-center justify-center relative p-8">
          <div className="relative w-full h-80 flex items-center justify-center">
            <div className="absolute w-[90%] h-[90%] z-10">
              <Image
                src={SignupImage}
                alt="Craft supplies"
                fill
                className="object-cover rounded-[60px]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 flex flex-col justify-center px-6 py-8 md:px-12">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
