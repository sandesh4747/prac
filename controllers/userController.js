import User from "../models/user.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (err) {
    console.log(err);
  }
};

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.status(409).json({ message: "user already exist" });
    const hashPass = bcrypt.hashSync(password, 10);
    await User.create({ username, email, password });
    return res.status(200).json({ message: "user registered successfully" });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
};
