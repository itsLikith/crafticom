import Image from 'next/image';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('/assets/authpage/background.png')] bg-cover bg-center bg-no-repeat px-2 py-6">
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#ffe5d0] to-[#fff7ef] rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden">
        {/* Left: Image */}
        <div className="hidden md:flex flex-1 items-center justify-center relative p-8">
          <div className="relative w-full h-80 flex items-center justify-center">
            <Image
              src="/assets/authpage/login.png"
              alt="Craft supplies"
              fill
              className="object-contain rounded-[60px]"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
            />
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 flex flex-col justify-center px-6 py-8 md:px-12">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}
