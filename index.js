const express = require("express");
const User = require("./models/User");

const app = express();

const router = express.Router();

const connectDB = require("./config/connectDB");
connectDB();
const port = 5500;
// app.use("/", (req, res) => {
//   res.json({
//     message: "hosting good",
//   });
// });

app.get("/all", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(port, (err) => {
  err
    ? console.log("erroor", err)
    : console.log(`this server is running on ${port}`);
});
