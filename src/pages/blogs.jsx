import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Blogs() {
  const [blogsData, setBlogsData] = useState([]); // State to store blog data
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          "https://fosslovers.com/wp-json/wp/v2/posts"
        );
        if (response.ok === false) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogsData(data); // Store the blog data in state
      } catch (err) {
        setError(err.message); // Catch and set any error
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex w-full justify-center p-10">
      <div className="grid grid-cols-2 container gap-5">
        {blogsData.map((blogData) => (
          <BlogCard
            key={blogData.id}
            title={blogData.title.rendered}
            excerpt={blogData.excerpt.rendered}
            imgUrl={blogData.jetpack_featured_media_url}
            postedDate={new Date(blogData.date).toLocaleDateString()}
            slug={blogData.slug}
          />
        ))}
      </div>
    </div>
  );
}

const BlogCard = ({ title, excerpt, imgUrl, postedDate, slug }) => {
  return (
    <div className="flex flex-col items-start border p-5 rounded-lg shadow-lg gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <img src={imgUrl} alt={title} className="w-full overflow-hidden h-96" />
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      <p>Published on: {postedDate}</p>
      <Link to={`/blogs/${slug}`}>
        <button className="bg-blue-500 text-white py-3 px-5 rounded-lg">
          Read more..
        </button>
      </Link>
    </div>
  );
};
