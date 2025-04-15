import React from "react";
import { useRemoveBlogMutation } from "./blogApi";
import toast from "react-hot-toast";
import { IconButton } from "@material-tailwind/react";

export default function RemoveBlog({ id }) {
  const [RemoveBlog, { isLoading }] = useRemoveBlogMutation();
  const handleRemove = async () => {
    try {
      await RemoveBlog(id).unwrap();
      toast.success("remove successfully");
    } catch (err) {}
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <IconButton onClick={handleRemove} size="sm" color="pink">
          {" "}
          <i className="fas fa-trash" />
        </IconButton>
      )}
    </div>
  );
}
