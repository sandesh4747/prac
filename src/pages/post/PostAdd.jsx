import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "./postSlice";
import * as Yup from "yup";

const postSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

export default function PostAdd() {
  const dispatch = useDispatch(); //this is necessary to send the data to the postSlice.js
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <Formik
        initialValues={{ title: "", content: "" }}
        validationSchema={postSchema}
        onSubmit={(values) => {
          dispatch(addPost(values));
          navigate("/");
          // The values in onSubmit contains exactly what the user typed i.e values in intialValues in object form initial they are empty. here dispatch sends the  values in object to the reducer which is in postSlice.js

          // this is the action recieved by redux
          // {
          //   type: "postSlice/addPost",
          //   payload: {
          //     title: "My First Post",
          //     content: "This is my content"
          //   }
          // }
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldValue,
          touched,
          errors,
        }) => (
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
              Add Post
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
