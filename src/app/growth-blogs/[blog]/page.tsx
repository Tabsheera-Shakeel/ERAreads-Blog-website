"use client"

import { useState} from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/app/components/Header'

type Blog = {
  id: string
  title: string
  content: string
  image: string
}

type Comment = {
  id: string
  name: string
  text: string
  userId: string // Unique ID for each user (or session)
}

const blogs: Blog[] = [
  {
    id: '1',
    title: 'Personal Development Journey of Becoming Your Best Self',
    content: `Personal development is the process of improving your skills, knowledge, and emotional well-being to reach your full potential. It's a holistic approach to growth that involves setting goals, building healthy habits, overcoming obstacles, and continuously learning from your experiences. The goal isn’t perfection—it's progress.

It can cover various aspects of life, including:

◼ Emotional Intelligence: Learning to manage your emotions and understand others.
◼ Mental Health: Prioritizing your well-being through self-care, mindfulness, and resilience.
◼ Skill Building: Developing new skills to improve your career, relationships, and personal life.
◼ Self-Reflection: Understanding who you are and what you want from life.

- Why is Personal Development Important?
◼ Unlocks Your Potential:
Personal development helps you recognize your strengths and work on your weaknesses. It pushes you to step outside your comfort zone and unlock new skills you didn’t know you had.

◼ Increases Confidence:
When you invest in your personal growth, you begin to trust yourself more. You gain confidence in your abilities, which empowers you to take on new challenges.

◼ Improves Relationships:
As you develop yourself, you learn how to communicate better, empathize with others, and build stronger connections. This can lead to healthier and more fulfilling relationships, both personally and professionally.

◼ Enhances Resilience:
Life can be tough, but personal development equips you with the tools to handle challenges with resilience. By learning how to manage stress, adapt to change, and maintain a positive mindset, you can overcome setbacks with greater ease.

- How to Start Your Personal Development Journey
◼ Set Clear Goals:
Begin by setting specific, measurable, achievable, relevant, and time-bound (SMART) goals. Having clear objectives will give you direction and purpose. Start with small goals, and as you achieve them, gradually aim higher.

◼ Commit to Continuous Learning:
Growth comes from learning. Read books, take courses, attend seminars, or engage in online communities. Stay curious and open to new knowledge, whether it’s related to your career or personal interests.

◼ Develop Healthy Habits:
Small habits lead to big changes. Incorporate positive habits like exercise, meditation, journaling, or planning your day to enhance your mental and physical well-being. Consistency is key to personal development.

◼ Embrace Failure as a Lesson:
Don’t fear failure. Instead, embrace it as a valuable lesson. Each setback is an opportunity to learn and grow. Stay persistent, and use challenges as stepping stones to success.

◼ Practice Self-Reflection:
Take time to reflect on your progress. Ask yourself questions like: What am I doing well? Where can I improve? Regular self-reflection helps you stay aligned with your goals and adjust your path as needed.

◼ Conclusion: The Lifelong Journey
Personal development is not something you can accomplish overnight. It’s a continuous, evolving process that requires patience, self-compassion, and a commitment to growth. As you work on becoming your best self, remember that it’s about progress, not perfection. Each step you take brings you closer to your potential.

The beauty of personal development is that it’s a lifelong journey. No matter where you are in life, there’s always room for growth and improvement. Start today, and keep striving to become the best version of yourself.`,
    image: 'https://i.pinimg.com/736x/f1/b0/82/f1b0825ebfa9262fa29412d63167963c.jpg'
  },
  {
    id: '2',
    title: 'Practice Makes Perfect: The Key to Mastery',
    content: `We've all heard the saying "practice makes perfect," but what does it really mean?

◼ At its core, it’s about the power of repetition. The more you practice something, the better you get at it. Whether you’re learning a new skill, like coding, playing an instrument, or mastering a sport, consistent practice allows you to improve over time.

◼ However, practice doesn’t just mean doing the same thing repeatedly. It’s about being deliberate and focused, aiming to improve specific areas where you struggle. When you intentionally practice with the goal of improving, you build muscle memory and gain deeper understanding.

◼ Remember, progress may feel slow at times, but every step forward counts. So, keep practicing and be patient. With time and effort, you’ll see improvement, and soon, what once felt hard will become second nature.

- Key Takeaways:

◼ Consistency is key to improving any skill.
◼ Deliberate practice helps you focus on areas for growth.
◼ Trust the process—progress happens gradually.`,
    image: 'https://i.pinimg.com/736x/b4/89/57/b489576a571e41500e25878365677e88.jpg'
  },
  {
    id: '3',
    title: 'Curiosity and Consistency Winning Combination for Success',
    content: `Curiosity and consistency are two powerful forces that can drive you toward success. While curiosity sparks the desire to learn and explore, consistency ensures that you stay on track and keep making progress.

◼ Curiosity: The Spark for Growth
Curiosity is what keeps us engaged and motivates us to discover new things. It’s the desire to understand, ask questions, and dive deeper into topics. Curiosity pushes you to explore different ideas, learn new skills, and never stop improving.

◼ Consistency: The Key to Progress
But curiosity alone isn’t enough. To see real progress, you need consistency. It’s about showing up every day, no matter how small the step, and putting in the effort consistently. With regular action, your curiosity turns into tangible growth.

◼ Why They Work Together
When you combine curiosity with consistency, you create a powerful routine for success. Curiosity keeps you excited and motivated, while consistency ensures that you stay disciplined and keep moving forward. Together, they help you reach your goals faster and more effectively.

- Key Takeaways:
◼ Curiosity fuels learning and discovery.
◼ Consistency ensures continuous progress.
◼ Together, they create a sustainable path to success.
◼ Remember, success is not an overnight achievement. It’s the result of constant curiosity and consistent effort over time. Keep exploring, stay consistent, and watch yourself grow!`,
    image: 'https://i.pinimg.com/736x/c6/1e/ac/c61eacde30546579f69066c36030a4ee.jpg'
  },
]

export default function BlogPost() {
  const { blog } = useParams() as { blog: string }
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [newCommenter, setNewCommenter] = useState('')
  const [currentUser] = useState('Tabsheera Shakeel')
  const [editCommentIndex, setEditCommentIndex] = useState<number | null>(null)
  const [editedComment, setEditedComment] = useState('')

  const blogPost = blogs.find((b) => b.id === blog)

  if (!blogPost) {
    return <h1 className="text-center text-2xl">Blog not found</h1>
  }

  const handleAddComment = () => {
    if (!newComment || !newCommenter) return // Validation to check if the comment and name are filled
    const newCommentData = {
      id: `${Math.random()}`, // Unique ID for each comment
      name: newCommenter,
      text: newComment,
      userId: currentUser,
    }
    setComments([...comments, newCommentData])
    setNewComment('')
    setNewCommenter('')
  }

  const handleEditComment = (index: number) => {
    const comment = comments[index]
    if (comment.userId === currentUser) {
      setEditCommentIndex(index)
      setEditedComment(comment.text)
    }
  }

  const handleSaveEditedComment = () => {
    const updatedComments = [...comments]
    updatedComments[editCommentIndex!] = {
      ...updatedComments[editCommentIndex!],
      text: editedComment,
    }
    setComments(updatedComments)
    setEditCommentIndex(null)
    setEditedComment('')
  }

  const handleDeleteComment = (index: number) => {
    const comment = comments[index]
    if (comment.userId === currentUser) {
      const updatedComments = comments.filter((_, i) => i !== index)
      setComments(updatedComments)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header/>
      <h1 className="mt-32 text-4xl font-semibold mb-6 text-center text-purple-500">{blogPost.title}</h1>
      <div className="mb-6 text-center border-b-4 border-purple-200 pb-2"></div>
      <Image 
        src={blogPost.image} 
        alt={blogPost.title} 
        width={500} 
        height={300} 
        className="mb-8 rounded-lg shadow-lg mx-auto" 
      />
      <div className="text-lg text-gray-800 leading-relaxed mb-8">
        {blogPost.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-medium mb-4">Comments</h3>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={comment.id} className="bg-gray-100 p-4 rounded-md">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold">{comment.name}:</span> <span>{comment.text}</span>
                </div>
                <div className="space-x-2">
                  {comment.userId === currentUser && (
                    <>
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
                    </>
                  )}
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
              className="mt-2 p-2 bg-purple-600 text-white rounded-md"
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
