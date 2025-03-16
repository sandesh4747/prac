import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="w-[300px] space-y-3 shadow-2xl p-3">
      <div>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-40 object-cover"
        />
        <h1>{post.title}</h1>

        <p>{post.detail}</p>
      </div>
    </div>
  );
}
