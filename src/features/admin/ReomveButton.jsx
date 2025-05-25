import { IconButton } from "@material-tailwind/react";
import React from "react";
import { useRemoveProductMutation } from "../products/productApi";
import toast from "react-hot-toast";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function RemoveButton({ id }) {
  const [removeProduct, { isLoading }] = useRemoveProductMutation();
  const { user } = useSelector((state) => state.userSlice);

  const handleRemove = async () => {
    try {
      await removeProduct({
        id,
        // token: user?.token
      }).unwrap();
      toast.success("successfully removed");
    } catch (err) {
      toast.error(err.data?.message || err.data);
    }
  };
  return (
    <IconButton onClick={handleRemove} size="sm" color="pink">
      <TrashIcon className="h-4 w-4" />
    </IconButton>
  );
}
