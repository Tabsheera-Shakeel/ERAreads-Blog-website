import Image from 'next/image'
import Link from 'next/link'

type Blog = {
  id: string
  title: string
  content: string
  image: string // Image field added
}

const blogs: Blog[] = [
  {
    id: '1',
    title: 'Personal Development Journey of Becoming Your Best Self',
    content: 'Read more',
    image: 'https://i.pinimg.com/736x/d1/bf/e0/d1bfe0e2a89ef64075a0b80640556525.jpg' // Example image
  },
  {
    id: '2',
    title: 'Practice Makes Perfect: The Key to Mastery',
    content: 'Read more',
    image: 'https://i.pinimg.com/736x/7e/b0/0d/7eb00d60c54404db19e0809101844be0.jpg' // Example image
  },
  {
    id: '3',
    title: 'Curiosity and Consistency Winning Combination for Success',
    content: 'Read more',
    image: 'https://i.pinimg.com/236x/a9/e5/7a/a9e57a70f1c5559d3a30dd470bd18d77.jpg' // Example image
  },
]

export default function GrowthBlogs() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white">

      <h1 className="text-3xl font-semibold mb-6 text-center border-b-2 border-purple-300 pb-2">
        Personal Growth & Development
      </h1>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg overflow-hidden shadow-md">
            {/* Image */}

            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
              width={200}
              height={200}
            />
            {/* Blog Details */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">
                <Link href={`/growth-blogs/${blog.id}`} className="hover:underline">
                  {blog.title}
                </Link>
              </h3>
              <p className="text-sm text-purple-500 mt-2">
                {blog.content.slice(0, 50)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
