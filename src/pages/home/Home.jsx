import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Category from "./Category";
import SearchItem from "./SearchItem";

export default function Home() {
  const nav = useNavigate();

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState(null);

  const getData = async () => {
    setLoad(true); /// calll
    try {
      if (search) {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setData((prev) => response.data);
      } else {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        ); //call
        setData((prev) => response.data);
      }

      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="p-5">
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={(val, { resetForm }) => {
          setSearch(val.query);
          console.log(val);
          // resetForm();
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
                className="bg-black text-white text-sm px-5 py-2 rounded-sm"
                type="submit"
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
      {search ? <SearchItem data={data} /> : <Category data={data} />}
    </div>
  );
}
