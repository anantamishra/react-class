import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SingleBlog() {
  const [blogsData, setBlogsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  console.log(slug);

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
        setBlogsData(data);
        console.log(data); // Store the blog data in state
      } catch (err) {
        setError(err.code); // Catch and set any error
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const blogData = blogsData.find((blogData) => blogData.slug === slug);
  console.log(blogData);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return <div>{blogData.title.rendered}</div>;
}
