import React from "react";
import "./index.css";
import PostCard from "./components/PostCard";
import { posts } from "./components/data/data";

export default function App() {
  // undefined ,null, 0,'',false

  return (
    <div>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            post={post}
            // title={post.title}
            // detail={post.detail}
            // imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}
