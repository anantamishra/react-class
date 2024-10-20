import { Link } from "react-router-dom";

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
      <Link to={`/news/${post.id}`}>
        <button className="bg-blue-500 p-2 rounded text-white font-bold mt-5">
          Read more ...
        </button>
      </Link>
    </div>
  );
}
