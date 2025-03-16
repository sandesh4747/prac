import React from "react";
import "./index.css";
import PostCard from "./components/PostCard";
import PostCard2 from "./components/PostCard2";
import { cards } from "./components/data/data";

export default function App() {
  // undefined ,null, 0,'',false

  return (
    // <div>
    //   {posts.map((post) => {
    //     return (
    //       <PostCard
    //         key={post.id}
    //         post={post}
    //         // title={post.title}
    //         // detail={post.detail}
    //         // imageUrl={post.imageUrl}
    //       />
    //     );
    //   })}
    // </div>
    <div className="flex  flex-wrap gap-10 m-8 p-4">
      {cards.map((card) => {
        return <PostCard2 key={card.id} card={card} />;
      })}
    </div>
  );
}
