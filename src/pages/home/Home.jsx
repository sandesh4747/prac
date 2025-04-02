import { Formik } from "formik";
import React from "react";

export default function Home() {
  return (
    <div className="p-4">
      <Formik
        initialValues={{
          username: "",
        }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ handleChange, handleSubmit, values, touched }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                value={values.username}
                className="border-2"
                placeholder="username"
                type="text"
                name="username"
              />

              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
