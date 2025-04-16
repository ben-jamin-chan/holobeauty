import { useParams } from "react-router-dom"
import { BlogData } from "./Blogsdata"
import { CalendarDays, Clock, Share2, Tag, User } from "lucide-react"

const BlogDetails = () => {
  const { id } = useParams()
  const blog = BlogData.find((b) => b.id === Number.parseInt(id))

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog not found</h2>
          <p className="text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    )
  }

  // Assuming these fields exist in your BlogData structure
  // If not, you can modify accordingly

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Blog Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-primary mb-3">
          <Tag size={16} />
          <span>{"Skincare & Make-ups"}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          {/* <div className="flex items-center gap-1">
            <User size={16} />
            <span>{author || "Hơ Lơ Beauty"}</span>
          </div> */}
          <div className="flex items-center gap-1">
            <CalendarDays size={16} />
            <span>{blog.published}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{blog.readtime}</span>
          </div>
        </div>
      </div>
      {/* Featured Image */}
      <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
        <img src={blog.image} alt="Blog post" className="w-full h-auto object-cover" />
      </div>
      {/* Blog Content */}
      <div className="prose prose-lg max-w-none">
        {blog.content}
      </div>

      {/* Tags
      {tags && tags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )} */}

      {/* Share */}
      <div className="mt-8 pt-6  border-gray-200">
        <div className="flex items-center gap-4">
          <span className="font-medium">Share this post:</span>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* TODO: STUDY THIS PART */}
       {/* Related Posts */}
       <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BlogData.filter(
            (relatedBlog) =>
              // Filter out current blog and find related by category or tags
              relatedBlog.id !== Number.parseInt(id) &&
              (relatedBlog.category === blog.category ||
                (blog.tags && relatedBlog.tags && relatedBlog.tags.some((tag) => blog.tags.includes(tag)))),
          )
            .slice(0, 3) // Limit to 3 related posts
            .map((relatedBlog) => (
              <a
                href={`/blog/${relatedBlog.id}`}
                key={relatedBlog.id}
                className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow block"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = `/blog/${relatedBlog.id}`
                  // If using React Router, use navigate instead:
                  // navigate(`/blog/${relatedBlog.id}`);
                }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={relatedBlog.image || "/placeholder.svg"}
                    alt={relatedBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{relatedBlog.title}</h3>
                  <p className="text-gray-600 text-sm">{relatedBlog.published}</p>
                </div>
              </a>
            ))}
        </div>

        {/* If no related posts are found */}
        {BlogData.filter((relatedBlog) =>
            relatedBlog.id !== Number.parseInt(id) &&
            (relatedBlog.category === blog.category ||
              (blog.tags && relatedBlog.tags && relatedBlog.tags.some((tag) => blog.tags.includes(tag)))),
        ).length === 0 && <p className="text-gray-500 text-center py-4">No related posts found.</p>}
      </div>
    </div>
  )
}

export default BlogDetails

