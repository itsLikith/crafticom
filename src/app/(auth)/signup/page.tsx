import SignupForm from './SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('/bg-craft.jpg')] bg-cover bg-center bg-no-repeat px-2 py-6">
      <div className="w-full max-w-4xl bg-gradient-to-br from-[#ffe5d0] to-[#fff7ef] rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden">
        {/* Left: Image */}
        <div className="hidden md:flex flex-1 items-center justify-center relative p-8">
          <div className="relative w-full h-80 flex items-center justify-center">
            <svg
              viewBox="0 0 400 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full"
            >
              <path
                d="M60,40 Q200,0 340,40 Q400,120 340,240 Q200,320 60,240 Q0,120 60,40 Z"
                fill="#fff7ef"
                stroke="#e7a77a"
                strokeWidth="8"
              />
            </svg>
            <img
              src="/login-craft.jpg"
              alt="Craft supplies"
              className="absolute w-[90%] h-[90%] object-cover rounded-[60px] z-10"
              style={{
                clipPath:
                  "path('M60,40 Q200,0 340,40 Q400,120 340,240 Q200,320 60,240 Q0,120 60,40 Z')",
              }}
            />
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
