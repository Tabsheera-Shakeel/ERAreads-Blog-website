"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/app/components/Header'

type Post = {
  id: string
  title: string
  content: string
  image: string // URL for the image
}

type Comment = {
  name: string
  text: string
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Mindset Before Getting into Tech',
    content: `Starting your journey in tech can feel overwhelming, but the right mindset is everything. Whether you re transitioning from another field or starting fresh, keeping a positive and determined mindset is the foundation for success.

    ◼ Focus on Consistency, Not Perfection
    When starting out, it's easy to get caught up in wanting to master everything immediately. However, consistency is key. Set aside time every day to practice. Even if it's just 30 minutes, small daily efforts add up over time. Focus on learning and improving, not being perfect from the start.
    
    ◼ Embrace Challenges as Opportunities
    The tech field can be tough, and you’ll face plenty of challenges. Instead of seeing these as obstacles, try to view them as chances to grow. Remember, every expert was once a beginner who struggled through similar problems. Don't be discouraged by failure – learn from it and keep pushing forward.
    
    ◼ Be Open to Learning
    The tech industry moves fast, and there's always something new to learn. Cultivate curiosity and be open to new technologies, frameworks, and concepts. The more you learn, the more confident you will feel in your skills.
    
    ◼ Set Small Goals
    Set achievable, short-term goals. Instead of focusing solely on long-term dreams like becoming a full-stack developer, aim for smaller wins like building your first webpage or learning a specific tool. These small victories will keep you motivated and help you track your progress.`,
    image: 'https://i.pinimg.com/736x/4f/b6/61/4fb661359897358d965b04bcc7772691.jpg'
  },
    {
      id: '2',
      title: 'Why AI is a Must-Learn Today',
      content: `Artificial Intelligence (AI) is no longer just a futuristic concept – it’s here, and it's transforming every industry. Whether you’re a developer, designer, or entrepreneur, understanding AI is crucial in today’s world.
  
  ◼ AI is Everywhere
  From voice assistants like Siri to recommendation systems on Netflix and Amazon, AI is already part of our daily lives. It's also behind smarter healthcare systems, autonomous vehicles, and even chatbots that provide customer support. The more you learn about AI, the more you'll see how it can improve efficiency and innovation.
  
  ◼ AI Offers Career Opportunities
  AI isn’t just for researchers or big tech companies. Its applications are vast, meaning there are opportunities for people in every industry. If you’re a developer, learning AI can open doors to exciting roles in data science, machine learning, and automation. It’s also a valuable skill in emerging fields like AI-driven web development.
  
  ◼ A Growing Industry
  AI is one of the fastest-growing industries in the tech world. By getting familiar with it now, you’re positioning yourself to be ahead of the curve. With AI becoming more accessible, even beginners can dive into machine learning and AI development with the right resources.
  
  ◼ Start Simple
  You don’t have to be an expert right away. Start with basic AI concepts like machine learning, data sets, and neural networks. There are plenty of online courses and tutorials to get you started. Once you understand the basics, you can dive deeper into more advanced topics.`,
      image: 'https://i.pinimg.com/736x/4d/8c/55/4d8c559a20d1bc6e505d940288261648.jpg'
    },
    {
      id: '3',
      title: 'Why Next.js is the Future of Web Development',
      content: `Next.js is rapidly becoming one of the most popular frameworks for web development, and for good reason. If you're already familiar with React, you'll love Next.js. It takes React to the next level by providing features that make web development faster, more efficient, and more powerful.
  
  ◼ SEO-Friendly
  Next.js enables server-side rendering (SSR) out of the box. This means that your web pages are rendered on the server and then sent to the browser, which is great for SEO (Search Engine Optimization). Unlike single-page applications (SPAs) built with React alone, which can struggle with SEO, Next.js ensures your site ranks better in search engines.
  
  ◼ Fast Performance
  Next.js optimizes your website's performance by offering automatic code splitting. This means that only the necessary code for the page is loaded, reducing the initial load time and making your website faster. Faster websites lead to better user experiences and improved search engine rankings.
  
  ◼ Simpler Routing
  Next.js simplifies routing compared to React. In React, you have to set up routing manually using React Router. In Next.js, the routing is based on the file structure, meaning that each page corresponds to a file in the pages directory. This convention-over-configuration approach makes it easier to organize and navigate your application.
  
  ◼ Easy Deployment
  Next.js integrates seamlessly with Vercel (the platform created by the makers of Next.js). This makes deploying your Next.js app quick and hassle-free. With just a few clicks, you can deploy your project, and it’s optimized for both performance and scalability.
  
  ◼ Great Documentation
  Next.js has excellent documentation, which makes it accessible for both beginners and advanced developers. The community around Next.js is also growing rapidly, so you’ll never be short of resources when learning and troubleshooting.`,
      image: 'https://i.pinimg.com/736x/f2/74/d6/f274d61e1f436113340400deb618a512.jpg'
    },
      {
        id: '4',
        title: 'Why Next.js is the Future of Web Development',
        content: `Tailwind CSS is revolutionizing the way developers approach styling. Instead of writing long CSS classes or using pre-designed components, Tailwind gives you full control over your design with utility-first classes.
    
     ◼ Utility-First Approach
    With Tailwind, you don’t need to write separate CSS rules. Instead, you apply utility classes directly to your HTML elements. For example, instead of creating a class in your CSS for padding and margins, you can use Tailwind’s built-in classes like p-4 and m-2 directly in your HTML.
    
     ◼ Rapid Prototyping
    Tailwind makes it easy to rapidly prototype and design websites. Since the classes are already pre-defined, you don’t need to spend time writing custom styles. You can quickly put together a layout and adjust it as needed, all without writing CSS from scratch.
    
     ◼ Customization
    Even though Tailwind uses utility classes, it’s highly customizable. You can configure the colors, spacing, typography, and more to match your project's specific design requirements. This makes it flexible and adaptable to your needs.
    
     ◼ Mobile-First Design
    Tailwind CSS is built with mobile-first design principles in mind. It’s easy to create responsive layouts using Tailwind’s responsive modifiers. For example, lg:px-6 will add padding to large screens, while smaller screens will use default padding, all without needing to write media queries.
    
     ◼ Great Community and Ecosystem
    Tailwind has a large and active community. There are also many tools, plugins, and templates available to speed up your development process. Whether you’re working on a small project or a large-scale web application, Tailwind’s ecosystem can support you.`,
        image: 'https://i.pinimg.com/736x/14/74/9e/14749e54dbdf5a0acd58f67743a84afa.jpg' // Example image
      },
      {
        id: '5',
        title: 'Why TypeScript is Adapting Fast',
        content: `TypeScript is rapidly becoming one of the most popular programming languages for web developers. Its growth can be attributed to several key advantages that make it a valuable tool for modern development.

 ◼ Stronger Code with Static Typing
TypeScript adds static typing to JavaScript, helping catch errors early and improving code quality. This makes your code more predictable and easier to maintain.

 ◼ Improved Developer Experience
With features like autocompletion and inline documentation, TypeScript makes coding faster and easier. Developers get real-time feedback, reducing the chances of bugs.

 ◼ Works Well with JavaScript
TypeScript is a superset of JavaScript, so it can easily be added to existing JavaScript projects without a complete rewrite. This gradual adoption makes it a smooth transition for many teams.

 ◼ Strong Community and Ecosystem
With increasing support from major frameworks like React, Angular, and Vue, TypeScript’s ecosystem is growing fast. Developers can easily find resources, tools, and community support.

 ◼ Better for Large Projects
TypeScript helps large teams work together by providing clear contracts between different parts of the application, reducing errors and improving collaboration.

 ◼ Conclusion
TypeScript's static typing, better tools, and strong ecosystem make it a favorite among developers. It’s a powerful tool that’s easy to integrate, helping developers write cleaner, more maintainable code. If you haven’t tried it yet, now is a great time to start!`,
        image: 'https://i.pinimg.com/736x/be/87/ce/be87cebbb89f29dd63cd85230ced3f74.jpg' // Example image
      },
      {
        id: '6',
        title: 'The Backbone of Web Development HTML',
        content: `HTML (HyperText Markup Language) is the foundation of web development. It’s the language used to create the structure of web pages. Here’s a quick breakdown of how HTML works:

 ◼ What is HTML?
HTML is used to define the content and structure of a webpage. It tells the browser how to display text, images, videos, links, and other elements. Every website you visit is built using HTML.

 ◼ Basic HTML Structure
An HTML document starts with the <!DOCTYPE html> declaration, which tells the browser that the document is HTML5. Then, it’s structured with the following tags:

 ◼ Important Tags
<h1> to <h6> – Headings, <h1> being the most important.
<p> – Paragraph tag for text.
<a> – Anchor tag for links.
<img> – Used to add images.
<div> – A container for grouping elements.

◼ Why HTML is Important
HTML is essential for creating websites and allows you to structure content in a way that browsers can understand. Knowing HTML is the first step in becoming a web developer and is a must for creating any website.`,
        image: 'https://i.pinimg.com/736x/f7/ae/b7/f7aeb70cea6548697fcfc63f5e4736fb.jpg' // Example image
      },
      {
        id: '7',
        title: 'Styling the Web with Simplicity using CSS',
        content: `CSS (Cascading Style Sheets) is the language used to style the visual appearance of a website. While HTML creates the structure, CSS makes it look good. It’s used to control colors, fonts, layouts, and more, making websites not only functional but also visually appealing. Let’s explore why CSS is so important and how it can enhance your website.

◼ Why is CSS Important?
Separation of Content and Design:
CSS allows you to separate the structure (HTML) from the design (CSS), making your code cleaner and easier to maintain.

◼ Consistency:
You can use CSS to apply the same styles across multiple pages, ensuring your website has a consistent look and feel.

◼ Responsive Design:
CSS helps create responsive designs that automatically adjust to different screen sizes, ensuring a good experience on desktops, tablets, and smartphones.

◼ Improved User Experience:
A well-styled website is more engaging and easier to navigate, which keeps users on your site longer.

◼Key Features of CSS
- Layout: Controls how elements are positioned and aligned on a page.
- Colors & Fonts: Customize the appearance of text and backgrounds to make content more readable and attractive.
- Spacing: Adjust margins and padding to make the page look less crowded.

◼ Responsive Design
With CSS, you can create designs that adapt to different devices. Responsive design makes sure your website looks great on both large screens and smaller mobile displays.

◼ Using CSS Frameworks
CSS frameworks like Bootstrap or Tailwind CSS offer pre-built styles and components. They help you build websites faster and more efficiently, without having to write every style from scratch.

◼ Conclusion
CSS is essential for styling your website and improving its user experience. By understanding and using CSS, you can create websites that are not only functional but also visually stunning and responsive across all devices. Whether you’re a beginner or experienced, mastering CSS will elevate your web development skills.`,
        image: 'https://i.pinimg.com/736x/a0/52/fa/a052fa9786bc024fbc996a2594e76ce2.jpg' // Example image
      },
      {
        id: '8',
        title: 'Frontend vs. Backend',
        content: `When it comes to web development, there are two main areas you need to understand: frontend and backend. But what exactly are these, and why should you care? Let's break it down.

◼ What is Frontend Development?
Frontend development is all about creating what users see and interact with on a website or application. It’s everything that happens in the browser. Frontend developers use technologies like HTML, CSS, and JavaScript to build visually appealing and interactive user interfaces (UI).

- HTML is used to structure content, like headings, paragraphs, and images.
- CSS is used to style the content, making it look attractive with colors, layouts, and fonts.
- JavaScript is used to add interactivity to web pages, like buttons that do something when clicked.
In essence, frontend development is focused on the user experience—ensuring the website looks good, works well, and is easy to navigate.

◼ What is Backend Development?
Backend development, on the other hand, deals with the server-side of things—the behind-the-scenes functionality that users don’t see. Backend developers work with databases, servers, and application logic to make sure that everything runs smoothly.

Some common backend technologies include:

- Languages like Node.js, Python, Ruby, Java, and PHP.
- Databases like MySQL, MongoDB, and PostgreSQL.
- APIs (Application Programming Interfaces) that allow different systems to communicate with each other.
- Backend developers ensure that data is stored and retrieved efficiently, handle user authentication, and integrate everything with the frontend to make it functional.

◼ How Do Frontend and Backend Work Together?
Think of frontend and backend as two halves of a whole. The frontend is what users see and interact with, while the backend ensures that the website or app works correctly by handling data processing and business logic. They must communicate effectively, often through APIs, to create a seamless user experience.`,
        image: 'https://i.pinimg.com/736x/85/ff/bc/85ffbc2e35a7e8d62997c53d58a2306d.jpg' // Example image
      },
      {
        id: '9',
        title: 'Why Python is an Excellent Choice for Programmers',
        content: `Python has become one of the most widely used programming languages in the world today. Known for its simplicity, versatility, and ease of use, Python is a great choice for both beginners and experienced developers. In this blog, we’ll explore why Python is a top choice for many.

- What Makes Python Stand Out?
◼ Easy to Learn and Use:
Python's syntax is simple and clean, making it an ideal language for beginners. You don't have to worry about complex rules or syntax, which makes learning Python easier and faster compared to many other programming languages.

◼ Wide Range of Applications:
Python is incredibly versatile and can be used for various purposes, from web development to data analysis, automation, artificial intelligence, and more. It’s used by professionals across different fields, including software development, finance, and science.

◼ Large Community and Rich Libraries:
Python has a vast and active community of developers who continuously contribute to a rich collection of libraries and frameworks. These libraries, such as Django for web development and Pandas for data analysis, help developers perform complex tasks with ease.

◼ Cross-Platform Compatibility:
Python works across multiple platforms, including Windows, macOS, and Linux. This makes it easy to develop programs that can run on any operating system without needing to change the code.

◼ Popular Uses of Python
- Web Development:
Python is a popular choice for web development, with frameworks like Django and Flask simplifying the process of creating robust websites.

◼ Data Science & AI:
Python is one of the leading languages for data science and AI, thanks to powerful libraries like NumPy, TensorFlow, and Scikit-learn.

◼ Automation:
Python’s simplicity makes it perfect for automating repetitive tasks, such as data entry, file management, and web scraping.

◼ Conclusion
Python’s ease of use, wide application range, and supportive community make it an excellent choice for anyone looking to dive into programming. Whether you're building a website, analyzing data, or automating tasks, Python provides the tools and libraries you need to get the job done efficiently. If you're new to programming or just exploring a new language, Python is a great place to start.`,
        image: 'https://i.pinimg.com/736x/e5/6f/1c/e56f1c0f774db0827d619e5e6376a73d.jpg' // Example image
      }
    ];
    
  
export default function Post() {
  const [isClient, setIsClient] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [newCommenter, setNewCommenter] = useState('')
  const [editCommentIndex, setEditCommentIndex] = useState<number | null>(null)
  const [editedComment, setEditedComment] = useState('')

  const { id } = useParams() as { id: string }

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div>Loading...</div> 
  }

  if (!id) {
    return <h1 className="text-center text-2xl">Post not found</h1>
  }

  const post = posts.find((post) => post.id === id)

  if (!post) {
    return <h1 className="text-center text-2xl">Post not found</h1>
  }

  const handleAddComment = () => {
    if (newComment.trim() && newCommenter.trim()) {
      const newCommentData: Comment = { name: newCommenter, text: newComment }
      setComments([...comments, newCommentData])
      setNewComment('')
      setNewCommenter('')
    }
  }

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, idx) => idx !== index)
    setComments(updatedComments)
  }

  const handleEditComment = (index: number) => {
    setEditCommentIndex(index)
    setEditedComment(comments[index].text)
  }

  const handleSaveEditedComment = () => {
    if (editedComment.trim()) {
      const updatedComments = [...comments]
      updatedComments[editCommentIndex!] = { ...updatedComments[editCommentIndex!], text: editedComment }
      setComments(updatedComments)
      setEditCommentIndex(null)
      setEditedComment('')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header/>
      {/* Post Title */}
      <h1 className=" mt-32 text-4xl font-semibold mb-6 text-center text-purple-500">{post.title}</h1>
      <div className="mb-6 text-center border-b-4 border-purple-200 pb-2"></div>

      {/* Post Image */}
      <Image 
        src={post.image} 
        alt={post.title} 
        width={500} 
        height={300} 
        className="mb-8 rounded-lg shadow-lg mx-auto" 
      />

      {/* Post Content */}
      <div className="text-lg text-gray-800 leading-relaxed mb-8">
        {post.content.split('\n').map((paragraph, index) => {
          if (paragraph.startsWith('**')) {
            const parts = paragraph.replace(/\*\*/g, '').split('\n');
            return (
              <div key={index} className="mb-4">
                <h2 className="text-3xl font-semibold py-2 px-4 mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg">{parts[0]}</h2>
                <p className="text-gray-700 mt-2">{parts[1]}</p>
              </div>
            )
          }
          return <p key={index} className="mb-4">{paragraph}</p>
        })}
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-medium mb-4">Comments</h3>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold">{comment.name}:</span> <span>{comment.text}</span>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEditComment(index)}
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Conditional rendering for editing a comment */}
        {editCommentIndex !== null && (
          <div className="mt-4">
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              rows={4}
              className="w-full p-3 border rounded-md"
            />
            <button
              onClick={handleSaveEditedComment}
              className="mt-2 p-2 bg-purple-500 text-white rounded-md"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditCommentIndex(null)}
              className="mt-2 ml-2 p-2 bg-purple-700 text-white rounded-md"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Add new comment */}
        {editCommentIndex === null && (
          <>
            <div className="mt-4">
              <input
                type="text"
                value={newCommenter}
                onChange={(e) => setNewCommenter(e.target.value)}
                placeholder="Your Name"
                className="w-full p-3 border rounded-md mb-2"
              />
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                rows={4}
                className="w-full p-3 border rounded-md"
              />
            </div>
            <button
              onClick={handleAddComment}
              className="mt-2 p-2 bg-purple-500 text-white rounded-md"
            >
              Add Comment
            </button>
          </>
        )}
      </div>
    </div>
  )
}
