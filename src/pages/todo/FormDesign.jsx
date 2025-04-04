import {
  Button,
  Card,
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

export default function FormDesign() {
  return (
    <Formik>
      {() => {
        return (
          <Card color="transparent">
            <Typography variant="h4" color="blue-gray">
              Contact Us
            </Typography>
            <Typography color="gray" className="mt-2">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 space-y-4">
              {/* Full Name */}
              <div className="space-y-1">
                <Typography variant="h6" color="blue-gray">
                  Full Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="John Smith"
                  className="!border-t-blue-gray-200 focus:!border-gray-900"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Typography color="blue-gray" variant="h6">
                  Email
                </Typography>
                <Input
                  type="email"
                  size="lg"
                  placeholder="john@example.com"
                  className="!border-t-blue-gray-200 focus:!border-gray-900"
                  labelProps={{ className: "hidden" }}
                />
              </div>

              {/* Contact Number */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  Contact Number
                </Typography>
                <Input
                  type="tel"
                  size="lg"
                  maxLength={16}
                  placeholder="e.g., +1 123-456-7890"
                  className="appearance-none !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:text-blue-gray-300 placeholder:opacity-100 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  labelProps={{ className: " hidden " }}
                />
                <Typography className="mt-2 text-xs text-blue-gray-500">
                  Include your country code for international numbers.
                </Typography>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-1">
                <Typography variant="h6" color="blue-gray">
                  Inquiry Type
                </Typography>
                <Select size="lg" label="Select Option">
                  <Option value="general">General Question</Option>
                  <Option value="support">Technical Support</Option>
                  <Option value="billing">Billing Inquiry</Option>
                </Select>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <Typography variant="small" color="blue-gray">
                  Preferred Contact Method
                </Typography>
                <Radio
                  id="email-radio"
                  name="contact-method"
                  label="Email"
                  defaultChecked
                />
                <Radio id="phone-radio" name="contact-method" label="Phone" />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  Message
                </Typography>
                <Textarea
                  size="lg"
                  placeholder="Your message here..."
                  className="!border-t-blue-gray-200 focus:!border-gray-900 min-h-[120px]"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              {/* Terms & Conditions */}
              <Checkbox
                label={
                  <Typography color="blue-gray" className="flex">
                    I agree with the
                    <Typography
                      as="a"
                      href="#"
                      color="blue"
                      className="transition-colors hover:text-blue-700"
                    >
                      &nbsp;terms and conditions
                    </Typography>
                    .
                  </Typography>
                }
              />

              {/* Submit */}
              <Button type="submit" className="mt-6" fullWidth>
                Submit Form
              </Button>
            </form>
          </Card>
        );
      }}
    </Formik>
  );
}
