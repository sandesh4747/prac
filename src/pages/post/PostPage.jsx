import { useSelector } from "react-redux";
import PostCard from "./PostCard";
import { useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";

export default function PostPage() {
  const { posts } = useSelector((state) => state.postSlice);
  const navigate = useNavigate();
  /*useSelector: A hook from React-Redux that extracts data from the Redux store 
  
  
  Uses useSelector to access the posts array from the Redux store

Specifically gets the postSlice part of the state where posts are stored

Destructures to get just the posts array*/

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <Button onClick={() => navigate("/add-post")}>Add New Post</Button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">No posts yet</h2>
          <p className="mb-4">Get started by creating your first post!</p>
          <Button onClick={() => navigate("/add-post")}>
            Create First Post
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
