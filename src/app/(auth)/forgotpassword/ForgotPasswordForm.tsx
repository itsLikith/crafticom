'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";

export default function ForgotPasswordForm() {
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  // Simulate sending OTP
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    setError('');
    setStep('otp');
  };

  // Simulate verifying OTP
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setError('Please enter the OTP sent to your email.');
      return;
    }
    setError('');
    setStep('reset');
  };

  // Simulate resetting password
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    setShowAlert(true);
    setTimeout(() => {
      router.push('/login');
    }, 2000); // Show alert for 2 seconds before redirect
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="flex items-center mb-2">
        <div className="w-7 h-7 rounded-full bg-[#e0d7d0] mr-2" />
        <span className="font-bold text-xl text-black">LOGO</span>
      </div>
      <h2 className="text-3xl font-bold text-[#c97b4d] mb-1 text-center">
        Forgot Password
      </h2>
      <p className="text-center text-[#a97b4d] mb-4 text-sm max-w-xs">
        Enter your registered email to receive an OTP and reset your password.
      </p>
      {showAlert && (
        <Alert className="mb-4">
          <AlertTitle>Password Reset Successful!</AlertTitle>
          <AlertDescription>
            You will be redirected to the login page.
          </AlertDescription>
        </Alert>
      )}
      {step === 'email' && (
        <form className="space-y-4 mt-2 w-full" onSubmit={handleSendOtp}>
          <div>
            <label
              htmlFor="email"
              className="text-lg font-bold text-[#c97b4d] block mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-[#c97b4d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c97b4d] bg-transparent text-base"
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#c97b4d] hover:bg-[#b06a3d] text-white text-lg font-bold rounded-xl py-2 mt-2 transition-colors"
          >
            Send OTP
          </button>
          <div className="text-center mt-4">
            <a
              href="/login"
              className="text-[#c97b4d] font-semibold hover:underline"
            >
              Back to Login
            </a>
          </div>
        </form>
      )}
      {step === 'otp' && (
        <form className="space-y-4 mt-2 w-full" onSubmit={handleVerifyOtp}>
          <div>
            <label
              htmlFor="otp"
              className="text-lg font-bold text-[#c97b4d] block mb-1"
            >
              OTP
            </label>
            <input
              id="otp"
              type="text"
              placeholder="Enter OTP sent to your email"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-3 border border-[#c97b4d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c97b4d] bg-transparent text-base"
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#c97b4d] hover:bg-[#b06a3d] text-white text-lg font-bold rounded-xl py-2 mt-2 transition-colors"
          >
            Verify OTP
          </button>
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setStep('email')}
              className="text-[#c97b4d] font-semibold hover:underline"
            >
              Change Email
            </button>
          </div>
        </form>
      )}
      {step === 'reset' && !showAlert && (
        <form className="space-y-4 mt-2 w-full" onSubmit={handleResetPassword}>
          <div>
            <label
              htmlFor="new-password"
              className="text-lg font-bold text-[#c97b4d] block mb-1"
            >
              New Password
            </label>
            <input
              id="new-password"
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 border border-[#c97b4d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c97b4d] bg-transparent text-base"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="text-lg font-bold text-[#c97b4d] block mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-[#c97b4d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c97b4d] bg-transparent text-base"
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#c97b4d] hover:bg-[#b06a3d] text-white text-lg font-bold rounded-xl py-2 mt-2 transition-colors"
          >
            Reset Password
          </button>
          <div className="text-center mt-4">
            <a
              href="/login"
              className="text-[#c97b4d] font-semibold hover:underline"
            >
              Back to Login
            </a>
          </div>
        </form>
      )}
    </div>
  );
}