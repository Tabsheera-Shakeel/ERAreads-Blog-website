import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="bg-purple-500 text-black">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>

<nav className="list-none mb-10">
  <li><Link href="/posts" className="text-white hover:text-gray-400">Blog</Link></li>
  <li><Link href="/about" className="text-white hover:text-gray-400">About</Link></li>
  <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
  <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
</nav>

            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
              <nav className="list-none mb-10">
                <li><a className="text-white hover:text-gray-400">Instagram</a></li>
                <li><a className="text-white hover:text-gray-400">Twitter</a></li>
                <li><a className="text-white hover:text-gray-400">Facebook</a></li>
                <li><a className="text-white hover:text-gray-400">LinkedIn</a></li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">RESOURCES</h2>
              <nav className="list-none mb-10">
                <li><a className="text-white hover:text-gray-400">Help</a></li>
                <li><a className="text-white hover:text-gray-400">FAQs</a></li>
                <li><a className="text-white hover:text-gray-400">Tutorials</a></li>
                <li><a className="text-white hover:text-gray-400">Webinars</a></li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT</h2>
              <nav className="list-none mb-10">
                <li><a className="text-white hover:text-gray-400">Email</a></li>
                <li><a className="text-white hover:text-gray-400">Call Us</a></li>
                <li><a className="text-white hover:text-gray-400">Address</a></li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NEWSLETTER</h2>
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-white">Subscribe for Updates</label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <p className="text-white text-sm text-center sm:text-left">© 2024 Merareads Blog —
              <a href="https://twitter.com/merareads" className="text-white ml-1" target="_blank" rel="noopener noreferrer">@merareads</a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">Your favorite blog for daily insights</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
