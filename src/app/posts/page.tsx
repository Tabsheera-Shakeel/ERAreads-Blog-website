import Link from 'next/link'
import GrowthBlogs from '../growth-blogs/page'
import { Header } from '../components/Header'
import Image from 'next/image'

type Post = {
  id: string
  title: string
  content: string
  // description:string
  image: string // Image field added
}

const posts: Post[] = [
  { 
    id: '1', 
    title: 'Mindset Before Getting into Tech', 
    content: 'Read more',

    image: 'https://i.pinimg.com/736x/4f/b6/61/4fb661359897358d965b04bcc7772691.jpg' // Example image
  },
  { 
    id: '2', 
    title: 'Why AI is a Must-Learn Today', 
    content: 'Read more',
    image: 'https://i.pinimg.com/736x/4d/8c/55/4d8c559a20d1bc6e505d940288261648.jpg' // Example image
  },
  { 
    id: '3', 
    title: 'Why Next.js is the Future of Web Development', 
    content: 'Read more',
    image: 'https://i.pinimg.com/736x/f2/74/d6/f274d61e1f436113340400deb618a512.jpg' // Example image
  },
  { 
    id: '4', 
    title: 'The Easiest Way to Style Your Websites with Tailwind CSS', 
    // description:'',
    content: 'Read more',
    image: 'https://i.pinimg.com/736x/14/74/9e/14749e54dbdf5a0acd58f67743a84afa.jpg' // Example image
  },
  { 
    id: '5', 
    title: 'Why TypeScript is Adapting Fast', 
    content: 'Read more',
    image: 'https://i.pinimg.com/236x/05/42/e0/0542e0f35e9c2ca33e1fbf36230f4fb8.jpg'
  }, 
  { 
    id: '6', 
    title: 'The Backbone of Web Development HTML', 
    content: 'Read more',
    image: 'https://i.pinimg.com/236x/5d/2c/17/5d2c177bca17faec6232064e9fafde0e.jpg' // Example image
  },
  { 
    id: '7', 
    title: 'Styling the Web with Simplicity using CSS', 
    content: 'Read more',
    image: 'https://i.pinimg.com/736x/e4/3e/4c/e43e4cd41ddffc21d2e6600dfca20306.jpg' // Example image
  },
  { 
    id: '8', 
    title: 'Frontend vs. Backend', 
    content: 'Read more',
    image: 'https://i.pinimg.com/736x/de/2a/ae/de2aaed37c4f4d053d1c76df89d2bd48.jpg' // Example image
  },
  { 
    id: '9', 
    title: 'Why Python is an Excellent Choice for Programmers', 
    content: 'Read more',
    image: 'https://i.pinimg.com/236x/34/01/ee/3401ee2dbb27776d850e77c6a2bee3d2.jpg' // Example image
  },
]

export default function TrendingBlogs() {
  return (
    <div className="max-w-4xl mx-auto p-3  ">
      <Header/>
      <h1 className="mt-24 text-3xl font-semibold mb-6 text-center border-b-2 border-purple-300 pb-2">
  Trending Blogs
</h1>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-md">
            {/* Image */}
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              width={200}
              height={200}
            />
            {/* Blog Details */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">
                <Link href={`/posts/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-purple-500 mt-2">
                {post.content.slice(0, 50)}...
              </p>
            </div>
          </div>
        ))}
      </div>
      <GrowthBlogs/>
    </div>
  )
}
