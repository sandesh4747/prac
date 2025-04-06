import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import React from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

export default function Form() {
  return (
    <div className="flex flex-col items-center    ">
      <AiFillAlipayCircle className="h-[54px] w-[54px] mb-[10px]" />
      <div className="flex flex-col justify-start  space-y-2 mb-15">
        <Typography variant="h6" className="text-4xl">
          Sign in to your account
        </Typography>
        <Typography color="blue-gray" className="flex   justify-center">
          Or
          <Typography
            as="a"
            href="#"
            color="indigo-800"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent hover:from-teal-600 hover:to-cyan-700 transition-colors"
          >
            &nbsp;start your 14-day free trial
          </Typography>
        </Typography>
      </div>
      <Formik
        initialValues={{ email: "", passowrd: "" }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ handleChange, handleSubmit, values, setFieldValue }) => {
          return (
            <div className="shadow-xl rounded-lg">
              <form
                className="max-w-screen-lg w-[500px] space-y-4  p-8 "
                onSubmit={handleSubmit}
              >
                <div className="space-y-2 ">
                  <Typography className="text-blue-gray-900">
                    Email address
                  </Typography>
                  <Input
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    size="lg"
                    className="focus:!border-t-gray-900"
                    placeholder="john@example.com"
                    labelProps={{ className: "hidden" }}
                  />
                </div>
                <div className="space-y-2 ">
                  <Typography className="text-blue-gray-900">
                    Password
                  </Typography>
                  <Input
                    value={values.passowrd}
                    name="password"
                    onChange={handleChange}
                    autoComplete="current-password"
                    size="lg"
                    placeholder="********"
                    className="focus:!border-t-gray-900"
                    labelProps={{ className: "hidden" }}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center ">
                    <Checkbox />
                    <Typography>Remember me</Typography>
                  </div>
                  <Typography
                    as="a"
                    href="#"
                    color="blue"
                    className="transition-colors hover:text-blue-700"
                  >
                    Forgot your password?
                  </Typography>
                </div>
                <div>
                  <Button
                    className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </div>
                <div className="flex items-center justify-center space-x-4 my-4">
                  <div className="flex-1 border-t border-gray-400"></div>
                  <Typography className="text-gray-600">
                    Or continue with
                  </Typography>
                  <div className="flex-1 border-t border-gray-400"></div>
                </div>
                <div className="flex justify-center gap-6">
                  {/* Facebook */}
                  <Typography
                    as="a"
                    href="#"
                    className="py-2 px-8 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer "
                  >
                    <FaFacebook className="w-6 h-6 text-gray-600  hover:text-blue-600 transition-color" />
                  </Typography>

                  {/* Twitter */}
                  <Typography
                    as="a"
                    href="#"
                    className="py-2 px-8 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer "
                  >
                    <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-500  transition-colors" />
                  </Typography>

                  {/* GitHub */}
                  <Typography
                    as="a"
                    href="#"
                    className="py-2 px-8 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
                  >
                    <FaGithub className="w-6 h-6 text-gray-600  hover:text-gray-800 transition-colors" />
                  </Typography>
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
