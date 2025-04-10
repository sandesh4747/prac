import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteNews } from "./newsSlice";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function NewsCard({ news }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteNews(news.id));
        Swal.fire("Deleted!", "Your news has been deleted.", "success");
      }
    });
  };

  return (
    <Card className="p-4">
      <div className="p-4">
        <Typography variant="h5">{news.title}</Typography>
        <Typography variant="small">By: {news.author}</Typography>
        <Typography className="mt-2">{news.detail}</Typography>
        <div className="flex flex-wrap gap-2 mt-2">
          {news.categories.map((category) => (
            <span key={category} className="bg-gray-200 px-2 py-1 rounded">
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <Button size="sm" onClick={() => nav(`/edit-news/${news.id}`)}>
          Edit
        </Button>
        <IconButton color="red" size="sm" onClick={handleDelete}>
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </Card>
  );
}
