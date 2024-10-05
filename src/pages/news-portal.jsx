import React, { useState } from "react";
import { blogPosts } from "../data";
import { BlogPostCard, SearchBar, SortOptions } from "../components";

export function NewsPortal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredPosts = blogPosts
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.publishedAt) - new Date(b.publishedAt);
      } else {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      }
    });

  return (
    <div className="flex justify-center py-10">
      <div className="p-4  shadow-lg rounded-lg flex flex-col w-2/3 border">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          News Portal
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>
        <div className="flex flex-col gap-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No posts found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
