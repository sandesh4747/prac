import React, { useState } from "react";

export default function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes((l) => l + 1);
  };

  const handleDislike = () => {
    setDislikes((d) => d + 1);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex space-x-4">
        <button
          onClick={handleLike}
          className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer"
        >
          👍 {likes}
        </button>
        <button
          onClick={handleDislike}
          className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
        >
          👎 {dislikes}
        </button>
      </div>
    </div>
  );
}
