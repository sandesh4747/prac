import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-700 text-xl">Loading...</p>;
  }

  if (!post) {
    return <p className="text-center text-red-500 text-xl">Post not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => nav(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}
