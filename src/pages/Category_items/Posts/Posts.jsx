import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold text-gray-700">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header  */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Latest Blog Posts
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          blanditiis.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-6">
        {posts &&
          posts.slice(0, 9).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer "
              onClick={() => nav(`/post/${post.id}`)}
            >
              {/* Post Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 ">
                  <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                    Category
                  </span>
                  <span className="text-xs text-gray-500">
                    {Math.floor(Math.random() * 10) + 1} min read
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {post.body}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center ">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                      <span className="text-xs text-gray-500">
                        User {post.userId}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">#{post.id}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
