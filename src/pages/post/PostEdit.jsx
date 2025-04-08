import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as Yup from "yup";
import { updatePost } from "./postSlice";

const postSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

export default function PostEdit() {
  const { postId } = useParams();
  const { posts } = useSelector((state) => state.postSlice);
  const post = posts.find((p) => p.id === postId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <Formik
        initialValues={{ title: post.title, content: post.content }}
        validationSchema={postSchema}
        onSubmit={(values) => {
          dispatch(updatePost({ id: postId, ...values }));
          navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <Input
              name="title"
              label="Post Title"
              value={values.title}
              onChange={handleChange}
              error={touched.title && Boolean(errors.title)}
            />
            {touched.title && errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}

            <Textarea
              name="content"
              label="Post Content"
              value={values.content}
              onChange={handleChange}
              error={touched.content && Boolean(errors.content)}
            />
            {touched.content && errors.content && (
              <p className="text-red-500 text-sm">{errors.content}</p>
            )}

            <Button type="submit" fullWidth>
              Update Post
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
