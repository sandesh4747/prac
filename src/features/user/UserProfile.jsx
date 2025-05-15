import React from "react";
import { useGetUserQuery, userApi, useUpdateUserMutation } from "./userApi";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { Button, Input } from "@material-tailwind/react";

export default function UserProfile() {
  const { user } = useSelector((state) => state.userSlice);
  const { data, isLoading, error } = useGetUserQuery(user.token);
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  console.log(data);
  return (
    <div className="p-5 max-w-[400px]">
      <Formik
        initialValues={{
          username: data.username,
          email: data.email,
        }}
        onSubmit={async (val) => {
          try {
            await updateUser({
              // these all are sent to q in updateUser in userApi
              token: user.token,
              body: {
                username: val.username,
                email: val.email,
              },
            });
            toast.success("User updated successfully");
          } catch (err) {
            toast.error(err.data?.message || err.data);
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" loading={updateLoading}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
