import {
  Button,
  Checkbox,
  Input,
  Option,
  Radio,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Formik } from "formik";
import React from "react";

export default function TodoAdd() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          location: "",
          colors: [],
          country: "",
          description: "",
        }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ handleChange, handleSubmit, values, touched, setFieldValue }) => {
          return (
            <form className="max-w-[400px] space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input
                  value={values.title}
                  onChange={handleChange}
                  label="Title"
                  name="title"
                />
              </div>

              <div className="">
                <Typography variant="h6">Select One</Typography>
                <div className="flex gap-10">
                  <Radio
                    onChange={handleChange}
                    color="red"
                    name="location"
                    value={"Indoor"}
                    label="HTML"
                  />
                  <Radio
                    onChange={handleChange}
                    color="amber"
                    name="location"
                    value={"Outdoor"}
                    label="React"
                  />
                </div>
              </div>

              <div>
                <Typography variant="h6">Select Colors</Typography>
                <div className="flex w-max gap-4">
                  <Checkbox
                    onChange={handleChange}
                    label="Blue"
                    name="colors"
                    color="blue"
                    value={"blue"}
                  />
                  <Checkbox
                    onChange={handleChange}
                    label="Red"
                    name="colors"
                    color="red"
                    value={"red"}
                  />
                  <Checkbox
                    onChange={handleChange}
                    label="Green"
                    name="colors"
                    color="green"
                    value={"green"}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Typography variant="h6">Select Your Country</Typography>
                <div className="w-72">
                  <Select
                    onChange={(e) => setFieldValue("country", e)}
                    label="Select Country"
                    name="country"
                  >
                    <Option value="Nepal">Nepal</Option>
                    <Option value="India">India</Option>
                    <Option value="China">China</Option>
                  </Select>
                </div>
              </div>

              <div>
                <Textarea
                  onChange={handleChange}
                  value={values.description}
                  label="Description"
                  name="description"
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
