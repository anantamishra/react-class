export function BlogPostCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-4">{post.content}</p>
      <p className="text-sm text-gray-500">
        Published on: {new Date(post.publishedAt).toLocaleDateString()}
      </p>
    </div>
  );
}
