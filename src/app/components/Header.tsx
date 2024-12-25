"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add state for controlling the menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 w-full bg-white shadow-lg">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ERAreads</span>
              <Image
                className="h-12 w-auto lg:h-16 transition-all duration-300 ease-in-out transform hover:scale-110"
                src="https://i.pinimg.com/236x/1e/e9/0a/1ee90a7c7e52b48bab72647a78132fd8.jpg" // Update with your logo
                alt="ERAreads Logo"
                width={180} // Increase width
                height={180} // Increase height
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu} // Toggle menu visibility
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-lg font-semibold text-gray-900 hover:text-gray-500 transition-colors">
              About
            </Link>
            <Link href="/posts" className="text-lg font-semibold text-gray-900 hover:text-gray-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-lg font-semibold text-gray-900 hover:text-gray-500 transition-colors">
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login" className="text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors">
              Log in <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
        {/* Mobile menu */}
        {isMenuOpen && ( // Only render the mobile menu when isMenuOpen is true
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50 bg-opacity-50 bg-black" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="#" className="p-1.5">
                  <span className="sr-only">ERAreads</span>
                  <Image
                    className="h-16 w-auto"
                    src="https://i.pinimg.com/236x/1e/e9/0a/1ee90a7c7e52b48bab72647a78132fd8.jpg"
                    alt="ERAreads Logo"
                    width={150}
                    height={150}
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={toggleMenu} // Close the menu when clicked
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                      Home
                    </Link>
                    <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                      About
                    </Link>
                    <Link href="/posts" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                      Blog
                    </Link>
                    <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                      Contact
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

