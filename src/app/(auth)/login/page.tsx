import Image from 'next/image';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('/assets/authpage/background.png')] bg-cover bg-center bg-no-repeat px-2 py-6">
      <div className="w-full max-w-4xl bg-gradient-to-br from-[#ffe5d0] to-[#fff7ef] rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden">
        {/* Left: Form */}
        <div className="flex-1 flex flex-col justify-center px-6 py-8 md:px-12">
          <LoginForm />
        </div>
        {/* Right: Image */}
        <div className="hidden md:flex flex-1 items-center justify-center relative p-8">
          <div className="relative w-full h-80 flex items-center justify-center">
            <div className="absolute w-[90%] h-[90%] z-10">
              <Image
                src="/assets/authpage/login.png"
                alt="Craft supplies"
                fill
                className="object-cover rounded-[60px]"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
