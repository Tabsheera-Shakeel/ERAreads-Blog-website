"use client";

import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import Image from "next/image";
import JourneySection from "../components/Message";


const article = {
  title: "From Zero to Tech: My Journey of Discovery, Learning, and Growth",
  date: "December 24, 2024",
  author: "Tabsheera Shakeel",
  content: `
    <p class="mb-4">I used to be a non-tech person. I didn’t even know how to use a computer. My childhood imagination ran wild – I pictured myself doing many things: a pilot, a soldier, a footballer, a doctor, and even an anchor. But tech? That never crossed my mind. I never imagined myself in this world, and I never felt drawn to it.</p>

    <h3 class="text-xl font-semibold text-purple-600 mb-4">Discovering Tech: The Unexpected Love Affair</h3>
    <p class="mb-4">Before I even knew what coding or programming was, I had zero knowledge about the tech world. I didn’t understand how websites were made or how functionalities worked. But one day, I stumbled upon it, and everything changed.</p>

    <p class="mb-4">I began with frontend development – learning how to write a few lines of code and seeing them come to life in a browser. It was magical. For the first time, I could see the results of my creativity. Writing code made me feel empowered. It gave me the ability to bring my ideas to life, and I loved it. My curiosity grew, and so did my hunger to learn more.</p>

    <h3 class="text-xl font-semibold text-purple-600 mb-4">The Struggles and Challenges</h3>
    <p class="mb-4">But here’s the thing: I wasn’t always confident. I was someone who didn't even know how to use a computer. I had zero knowledge, and everything was new to me. It felt like the first day of school, learning ABCs and counting. Sleepless nights became a part of my journey. I would stay up late, trying to understand complex programming concepts, practicing over and over again.</p>

    <p class="mb-4">There were days when I got stuck in errors for hours. I found myself searching for things like “alphabet in a keyword,” not knowing what I was doing. But curiosity kept me going. I wanted to understand how websites were made, how functionalities were added, and why robots were so smart. </p>

    <p class="mb-4">Fast forward to today, and I’m now typing fast, writing commands, and coding with confidence. It was overwhelming at times, frustrating even, but I never gave up. I remained consistent, using the resources I had and always pushing myself to keep learning.</p>

    <h3 class="text-xl font-semibold text-purple-600 mb-4">Tech and Personal Development: Growing in All Areas</h3>
    <p class="mb-4">Along with my journey in tech, I also focused on my personal growth. I worked on improving my communication skills. I overcame my fears, speaking in front of thousands of people. I believed in myself and continuously practiced, honing my skills to become a better communicator and help others in their own journeys.</p>

    <p class="mb-4">Being a good human is just as important as being a good developer. I strive to balance both. Helping others, sharing knowledge, and staying grounded have been a big part of my journey. I’m not just focused on tech – I want to grow in every way possible.</p>

    <h3 class="text-xl font-semibold text-purple-600 mb-4">Looking Forward: The Journey Never Ends</h3>
    <p class="mb-4">There’s still so much more to learn, and I’m excited for what’s ahead. The tech world is vast, and I can’t wait to keep creating. Every challenge I face only fuels my passion more, and I’m grateful for the journey I’ve been on so far.</p>

    <p class="mb-4">I’m eternally thankful for the support of my loved ones, my parents, and my mentor. They believed in me when I didn’t believe in myself, and their encouragement has kept me going.</p>

    <h3 class="text-xl font-semibold text-purple-600 mb-4">Conclusion: Embracing the Future</h3>
    <p class="mb-4">As I look back at my journey, I realize just how far I’ve come. From someone who didn’t know anything about tech to where I am now – coding, creating, and constantly learning. It’s been a rollercoaster ride, but I wouldn’t trade it for anything.</p>

    <p class="mb-4">There’s still so much more to do, and I’m ready to embrace the future. I’ll continue to push myself, grow in both tech and personal development, and share my journey with others. Together, we can create, learn, and inspire.</p>
 `,
  image: "/purple.jpg", 
};

const ArticlePage = () => {
  const [mounted, setMounted] = useState(false);
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const comment = (form.elements.namedItem("comment") as HTMLTextAreaElement).value;
  
    setComments([...comments, { name, comment }]);
    form.reset();
  };
  

  const copyArticleUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Article URL copied to clipboard!");
  };

  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center py-12 text-gray-800">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <Header />
      
      {/* Article Content */}
      <div className="mt-14 text-center mb-8 px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl mt-10 font-bold text-purple-600 mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-2">By {article.author} | {article.date}</p>
        <p className="text-gray-400">{`Estimated Reading Time: 5 min`}</p>
      </div>

      <div className="mb-8">
        <Image
          src={article.image}
          alt="Tabsheera Shakeel"
          width={500}
          height={300}
          className="mx-auto object-cover shadow-lg"
        />
      </div>

      <div className="w-full max-w-4xl px-6 sm:px-12 lg:px-24">
        <div
          className="prose prose-lg sm:prose-xl text-gray-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

     
        
  <JourneySection/>
        <button
          onClick={copyArticleUrl}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Copy Article URL
        </button>

        <form onSubmit={handleCommentSubmit} className="mt-8 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
          <div className="mb-4">
            <input
              name="name"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded w-full mb-4"
              required
            />
            <textarea
              name="comment"
              placeholder="Your Comment"
              className="p-2 border border-gray-300 rounded w-full"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
          >
            Submit Comment
          </button>
        </form>

        <div className="mt-8 w-full max-w-4xl">
  {comments.length > 0 && (
    <div className="mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded-md shadow-md border border-gray-200"
          >
            <p className="text-purple-600 font-bold mb-1">
              {index + 1}. {comment.name}
            </p>
            <p className="text-gray-800">{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
      </div>
  
  );
};

export default ArticlePage;
