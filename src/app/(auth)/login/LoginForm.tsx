'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // <-- Use next/navigation for app router
import Crafticom from '../../Crafticom.png';

export default function LoginForm() {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, remember }),
        credentials: 'include',
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || data.message || 'Login failed');
        setLoading(false);
        return;
      }
      const data = await res.json();
      setLoading(false);
      if (data.user.role === 'craftizen') {
        window.location.href = '/craftizen/home'; // <-- Use full reload
        return;
      } else if (data.user.role === 'artisan') {
        window.location.href = '/artisan/home'; // <-- Use full reload
        return;
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="flex items-center mb-4">
        <div className="mb-2 w-full flex justify-center">
          <Image
            src={Crafticom}
            alt="Crafticom Logo"
            width={200}
            height={50}
            priority
            className="object-contain h-auto w-32 sm:w-44 md:w-56"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-[#c97b4d] mb-1 text-center">
        Welcome Back
      </h2>
      <p className="text-center text-[#a97b4d] mb-6">
        Glad to see you again. Select method to log in
      </p>
      <form className="space-y-4 mt-2 w-full" onSubmit={handleSubmit}>
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
            className="w-full px-4 py-3 border border-[#c97b4d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c97b4d] bg-transparent text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-bold text-[#c97b4d] block mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            className="w-full px-4 py-3 border border-[#c97b4d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c97b4d] bg-transparent text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="mr-2 accent-[#c97b4d] w-5 h-5"
            />
            <label
              htmlFor="remember"
              className="text-[#c97b4d] font-medium select-none"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/forgotpassword"
            className="text-[#a97b4d] font-medium hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        {error && (
          <div className="text-red-500 text-center font-medium">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-[#c97b4d] hover:bg-[#b06a3d] text-white text-lg font-bold rounded-xl py-2 mt-2 transition-colors"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-[#c97b4d]" />
          <span className="mx-3 text-[#a97b4d]">or continue using</span>
          <div className="flex-grow border-t border-[#c97b4d]" />
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-[#c97b4d] hover:bg-[#b06a3d] text-white font-bold text-lg rounded-xl py-2 transition-colors"
        >
          Login with Google
          <span className="ml-2">
            {/* Google SVG */}
            <svg width="22" height="22" viewBox="0 0 48 48">
              <g>
                <path
                  fill="#4285F4"
                  d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"
                />
                <path
                  fill="#34A853"
                  d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3c-7.2 0-13.4 4.1-16.7 10.1z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 43c5.6 0 10.5-1.9 14.3-5.2l-6.6-5.4C29.7 34.9 27 36 24 36c-6.1 0-10.7-2.9-13.7-7.1l-7 5.4C10.6 40.9 16.8 43 24 43z"
                />
                <path
                  fill="#EA4335"
                  d="M44.5 20H24v8.5h11.7c-1.6 4.1-6.1 7.5-11.7 7.5-6.1 0-10.7-2.9-13.7-7.1l-7 5.4C10.6 40.9 16.8 43 24 43c7.2 0 13.4-4.1 16.7-10.1z"
                />
              </g>
            </svg>
          </span>
        </button>
      </form>
      <div className="text-center mt-6 text-[#a97b4d]">
        Don’t have an account?{' '}
        <Link
          href="/signup"
          className="font-bold text-[#c97b4d] hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}
