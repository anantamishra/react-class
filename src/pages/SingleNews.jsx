import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data";

export function SingleNews() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>Title: {post.title}</h1>
      <p>Content: {post.content}</p>
      <p>Published on: {post.publishedAt}</p>
    </div>
  );
}
