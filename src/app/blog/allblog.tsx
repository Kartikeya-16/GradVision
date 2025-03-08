"use client"

import { useState, useEffect } from "react"

interface Blog {
  _id: string
  url: string
  title: string
  meta: string
  writer: string
  imageUrl: string
  upload_time: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/blog/get-recent-3")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log("Received data:", data) // Log the received data

        if (Array.isArray(data)) {
          setBlogs(data)
        } else if (typeof data === "object" && data !== null) {
          // If it's an object, it might be wrapped in a property
          const possibleArray = Object.values(data)[0]
          if (Array.isArray(possibleArray)) {
            setBlogs(possibleArray)
          } else {
            throw new Error("Received data is not an array and could not be converted to one")
          }
        } else {
          throw new Error("Received data is not an array or object")
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
        setError(error instanceof Error ? error.message : "An unknown error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const categories = [
    "Admission & Application Tips",
    "Carrier Development",
    "Admission & Application Tips",
    "Carrier Development",
    "Carrier Development",
    "Admission & Application Tips",
  ]

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>
  }

  return (
    <div className="p-6 max-w-[1100px] mx-auto font-[Inter]">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-[#012060]">ALL BLOGS</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className="border-[2px] border-[#012060] px-7 py-2 text-sm font-bold rounded-lg text-[#012060] font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="border-[2px] border-[#012060] rounded-lg p-4 w-[90%] md:w-[501px] mx-auto shadow-[-7px_5px_#012060] bg-white"
            >
              {/* Image with Padding Inside the Card */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={blog.imageUrl || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500 font-medium">
                  {new Date(blog.upload_time).toLocaleDateString()} • {/* You might want to calculate read time */}
                </p>
                <h2 className="text-lg font-medium mt-1">{blog.title}</h2>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{blog.meta}</p>

                {/* Read More Button */}
                <a
                  href={blog.url}
                  className="block mt-4 w-full bg-orange-500 text-white py-2 font-bold rounded-md text-sm text-center"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center">No blogs found.</div>
        )}
      </div>
    </div>
  )
}

