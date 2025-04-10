import { Button, Checkbox, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addNews } from "./NewsSlice";
import { useNavigate } from "react-router";

const newsSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  detail: Yup.string().required("Detail is required"),
  author: Yup.string().required("Author is required"),
  categories: Yup.array().min(1, "Select at least one category"),
});
const categories = ["Technology", "Sports", "Business", "Entertainment"];
export default function NewsAdd() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ title: "", detail: "", author: "", categories: [] }}
        validationSchema={newsSchema}
        onSubmit={(values) => {
          dispatch(addNews(values));
          nav("/");
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
              label="News Title"
            />
            {touched.title && errors.title && (
              <p className="text-red-600">{errors.title}</p>
            )}

            <Textarea
              name="detail"
              value={values.detail}
              label="News Detail"
              onChange={handleChange}
            />
            {touched.detail && errors.detail && (
              <p className="text-red-600">{errors.detail}</p>
            )}
            <Input
              name="author"
              label="Author"
              value={values.author}
              onChange={handleChange}
            />
            {touched.author && errors.author && (
              <p className="text-red-600">{errors.author}</p>
            )}
            <div className="space-y-2">
              <h4>Categories</h4>
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox
                    id={category}
                    checked={values.categories.includes(category)}
                    onChange={() => {
                      const newCategories = values.categories.includes(category)
                        ? values.categories.filter((c) => c !== category)
                        : [...values.categories, category];
                      setFieldValue("categories", newCategories);
                    }}
                  />
                  <label htmlFor={category} className="ml-2">
                    {category}
                  </label>
                </div>
              ))}
              {touched.categories && errors.categories && (
                <p className="text-red-600">{errors.categories}</p>
              )}
            </div>
            <Button type="submit" fullWidth>
              Add News
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
