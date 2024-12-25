import React from 'react';
import Image from 'next/image';
import { Header } from '../components/Header';

const About = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Header/>

      {/* Background Image */}
      <Image
  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
  alt="About background"
  width={2830} // Set actual width value
  height={1500} // Set actual height value
  className="absolute inset-0 -z-10 object-cover object-right md:object-center"
/>

    
      {/* About Content */}
      <div className="mt-16 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Me</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl">
            {`Welcome to my blog! Here, I share my journey, ideas, and passion for coding and technology. Join me as I explore the world of web development, personal growth, and much more!`}
          </p>
        </div>
        
        {/* Blog Highlights */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#">My Projects <span aria-hidden="true">→</span></a>
            <a href="#">Tutorials & Guides <span aria-hidden="true">→</span></a>
            <a href="#">Tech Insights <span aria-hidden="true">→</span></a>
            <a href="#">About Coding Journey <span aria-hidden="true">→</span></a>
          </div>
    
          {/* Stats or Achievements */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">Blog Posts</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">50+</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">Followers</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">7000+</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">Years of Experience</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">5</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">Courses Completed</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">20+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
