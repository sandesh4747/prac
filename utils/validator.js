import Joi from "joi";
import { validate } from "uuid";
import { brands, categories } from "../models/Product.js";

export const productValSchema = Joi.object({
  title: Joi.string().min(10).required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),

  rating: Joi.number(),
  category: Joi.string()
    .valid(...categories)
    .required(),
  brand: Joi.string()
    .valid(...brands)
    .required(),
});
