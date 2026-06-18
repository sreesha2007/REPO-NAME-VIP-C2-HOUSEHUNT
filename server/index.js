const express = require("express");

require("./db");

const User = require("./model/user");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.post("/register", async (req, res) => {
  console.log("Request received");
  console.log(req.body);
  try {
    const user = new User(req.body);

    await user.save();

    res.json({
      success: true,
      message: "User Registered",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server Started");
});