import express from "express";
import morgan from "morgan";

const app = express();

//middleware

app.use(morgan("dev"));
app.use(express.json());

app.use("/users", (req, res, next) => {
  console.log("middleware chalyo");
  // return res.status(200).json({
  //   message: 'spme thing',
  // });
  return next();
});

app.get("/", (req, res) => {
  // const { q } = req.query;
  // console.log(q);

  return res.status(200).json({
    message: "Welcome to Backened",
    numbers: [11, 22, 33, 44, 55],
  });
});
app.post("/", (req, res) => {
  // const { q } = req.query;
  // console.log(q);
  console.log(req.body);

  return res.status(200).json({
    message: "Welcome to Backened",
    numbers: [11, 22, 33, 44, 55],
  });
});

app.get("/users", (req, res) => {
  return res.status(200).json(["ram", "shyam", "hari"]);
});

//path define file
//response dine logic
// model banaune

app.listen(5000, () => {
  console.log("server is listening");
});
