"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import Head from "next/head";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields");
    } else {
      setError("");
      console.log("Logged in with:", email, password);
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>{`Login | My Website`}</title>
        <meta name="description" content="Login to access your account and explore amazing features." />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-purple-100">
        <div className="isolate  px-6 py-28 sm:py-32 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <Header />
          <div className="bg-white shadow-lg p-8 rounded-lg max-w-full w-96">
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            {error && (
              <p className="text-red-500 text-center mb-4" role="alert" aria-live="assertive">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-500 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Login"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                {`Don't have an account?`}{" "}
                <Link href="/signup" className="text-purple-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
