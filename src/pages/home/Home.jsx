import { Formik } from "formik";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className="p-5">
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={(val, { resetForm }) => {
          console.log(val);
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="space-y-2 flex gap-4 items-baseline"
            >
              <div>
                <input
                  className="border-2 border-gray-500 px-2 w-[300px] py-1"
                  value={values.query}
                  onChange={handleChange}
                  type="text"
                  name="query"
                  placeholder="search for meals"
                />
              </div>

              <button
                className="bg-black text-white px-4 py-2 rounded-sm text-sm"
                type="submit"
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
