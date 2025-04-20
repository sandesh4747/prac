import React from "react";
import { useAddUserMutation } from "./userApi";
import { Formik } from "formik";
import { Button, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router";

export default function AddUser() {
  const [addUser, { isLoading }] = useAddUserMutation();
  const nav = useNavigate();
  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addUser(values).unwrap();

      nav(-1);
    } catch (err) {
      console.error("Failed to save user:", err);
    }
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, errors, values, touched }) => (
          <form onSubmit={handleSubmit}>
            <div>
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
            <Button type="submit" loading={isLoading}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
