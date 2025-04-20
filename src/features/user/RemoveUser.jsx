import { IconButton } from "@material-tailwind/react";
import React from "react";

import { useRemoveUserMutation } from "./userApi";
import { useNavigate } from "react-router";

export default function RemoveBlog({ id }) {
  const [removeUser, { isLoading }] = useRemoveUserMutation();
  const nav = useNavigate();

  const handeleRemove = async () => {
    try {
      await removeUser(id).unwrap();
    } catch (err) {}
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="space-x-2">
          <IconButton
            onClick={() => nav(`/update-user/${id}`)}
            size="sm"
            color="pink"
          >
            <i className="fas fa-edit" />
          </IconButton>
          <IconButton onClick={handeleRemove} size="sm" color="pink">
            <i className="fas fa-trash" />
          </IconButton>
        </div>
      )}
    </div>
  );
}
