const express = require("express");
const User = require("../models/User");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();

const connectDB = require("../config/connectDB");
connectDB();
// const port = 5500;
router.get("/", (req, res) => {
  res.json({
    message: "hosting good",
  });
});

router.get("/all", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
app.use("/.netlify/functions/api", router);

// app.listen(port, (err) => {
//   err
//     ? console.log("erroor", err)
//     : console.log(`this server is running on ${port}`);
// });
module.exports.handler = serverless(app);
