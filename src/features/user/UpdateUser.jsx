import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { useGetUserByIdQuery, useUpdateUserMutation } from "./userApi";

export default function UpdateUser() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserByIdQuery(id);
  const [updateUser] = useUpdateUserMutation();
  const nav = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await updateUser({ id, ...values }).unwrap();

      nav(-1);
    } catch (err) {
      console.error("Failed to update user:", err);
    }
  };
  if (isLoading) return <div>Loading user data...</div>;
  if (isError) return <div>Error loading user data</div>;

  return (
    <div>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, errors, values, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className="">
              <Input
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                label="Phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Website"
                name="website"
                value={values.website}
                onChange={handleChange}
              />
            </div>

            <h3 className="font-semibold mt-4">Address</h3>
            <div className="pl-4 space-y-4">
              <Input
                label="Street"
                name="address.street"
                value={values.address.street}
                onChange={handleChange}
              />
              <Input
                label="Suite"
                name="address.suite"
                value={values.address.suite}
                onChange={handleChange}
              />
              <Input
                label="City"
                name="address.city"
                value={values.address.city}
                onChange={handleChange}
              />
              <Input
                label="Zipcode"
                name="address.zipcode"
                value={values.address.zipcode}
                onChange={handleChange}
              />
            </div>

            <h3 className="font-semibold mt-4">Company</h3>
            <div className="pl-4 space-y-4">
              <Input
                label="Company Name"
                name="company.name"
                value={values.company.name}
                onChange={handleChange}
              />
              <Input
                label="Catch Phrase"
                name="company.catchPhrase"
                value={values.company.catchPhrase}
                onChange={handleChange}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
