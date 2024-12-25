import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const JourneySection = () => {
  return (
    <section className="bg-white-100 py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <h3 className="text-3xl font-semibold text-purple-500 bg-purple-200  shadow-lg text-center mt-12 mb-6">
          {`Your Journey Awaits!`}
        </h3>
        <p className="mb-4 text-lg text-gray-800 text-center">
          {`No matter where you are on your journey, take the first step today. Embrace the unknown, learn, and grow. You have the potential to make a difference. Let's create something amazing, together!`}
        </p>
        <p className="text-gray-600 text-center mb-4">{`Follow me on:`}</p>
        <div className="flex justify-center space-x-6 mt-6">
          <Link href="https://www.linkedin.com/in/tabsheera-shakeel-116555300/" target="_blank" className="text-purple-600 hover:text-purple-800">
            <FaLinkedin size={32} />
          </Link>
          <Link href="https://github.com/Tabsheera-Shakeel" target="_blank" className="text-purple-600 hover:text-purple-800">
            <FaGithub size={32} />
          </Link>
          <Link href="https://www.facebook.com/tabsheera.shakeel" target="_blank" className="text-purple-600 hover:text-purple-800">
            <FaFacebook size={32} />
          </Link>
        </div>
        <p className="text-center mt-8 text-lg font-semibold text-gray-700">
          {`Embrace the unknown, stay curious, and keep pushing forward. Together, we’ll continue to learn, grow, and inspire others. Your future is bright – let's make it happen!`}
        </p>
      </div>
    </section>
  );
}

export default JourneySection;
