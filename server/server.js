const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");


const app = express();
const PORT = 5000;
mongoose.connect("mongodb://localhost:27017/HouseHunt")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("HouseHunt Backend is Running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});