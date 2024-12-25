"use client";

import Link from "next/link";
import TrendingBlogs from "./posts/page";
import { Header } from "./components/Header";
import { motion } from "framer-motion"; 

export default function Home() {
  

  return (
    <div className="bg-white">
      <Header />
       <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative isolate px-6 pt-1 lg:px-8"
        >
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="hidden sm:mb-8 sm:flex sm:justify-center"
            >
              <div className="relative rounded-full px-3 py-1 text-sm font-semibold text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {`Welcome to ERAreads!`}
                <Link href="#" className="font-semibold text-purple-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Explore More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Enrich Your Mind with ERAreads
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
                {`Dive deep into the world of books, reviews, and insightful articles.`}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="mt-10 flex items-center justify-center gap-x-6"
                >
                  <Link
                    href="/article"
                    className="rounded-md bg-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-500 ease-in-out"
                  >
                    Start Reading
                  </Link>
                  <Link
                    href="/posts"
                    className="text-sm font-semibold text-gray-900 transition-all duration-500 ease-in-out"
                  >
                    Explore Blogs <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
            <motion.div
              className="absolute inset-x-0 top-0 bg-white p-6 shadow-lg"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
            </motion.div>
        </motion.div>
      <TrendingBlogs />
    </div>
  );
}
