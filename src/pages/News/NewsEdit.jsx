import { Button, Checkbox, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as Yup from "yup";
import { updateNews } from "./newsSlice";

const categories = ["Technology", "Sports", "Business", "Entertainment"];

const newsSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  detail: Yup.string().required("Detail is required"),
  author: Yup.string().required("Author is required"),
  categories: Yup.array().min(1, "Select at least one category"),
});
export default function NewsEdit() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { newsId } = useParams();
  const { news } = useSelector((state) => state.newsSlice);
  const newsItem = news.find((item) => item.id === newsId);
  return (
    <div>
      <Formik
        initialValues={{
          title: newsItem.title,
          detail: newsItem.detail,
          author: newsItem.author,
          categories: newsItem.categories,
        }}
        onSubmit={(values) => {
          dispatch(updateNews({ ...values, id: newsId }));
          nav("/");
        }}
        validationSchema={newsSchema}
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
              label="News Title"
              value={values.title}
              onChange={handleChange}
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
              Update News
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
