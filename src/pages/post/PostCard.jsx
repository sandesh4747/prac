import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deletePost } from "./postSlice";

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card className="p-4">
      <div>
        <Typography variant="h5">{post.title}</Typography>
        <Typography className="mt-2">{post.content}</Typography>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <Button
          size="sm"
          onClick={() => {
            console.log("Editing post ID:", post.id);

            navigate(`/edit-post/${post.id}`); /*value of post.id here is 1 */
          }}
        >
          Edit
        </Button>
        <IconButton
          color="red"
          size="sm"
          onClick={() => dispatch(deletePost(post.id))}
          /* here post.id contains the ID of the specific post being deleted (e.g., "1")

This gets passed to the deletePost action creator

The deletePost action creator generates an action object like:
{
  type: "postSlice/deletePost",
  payload: "1" // The post ID we passed

  now go to postSlice.js deletepost
}
*/
        >
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </Card>
  );
}
