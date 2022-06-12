const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
// Import routes
const authRoute = require("./routes/auth");
const baseRoute = require("./routes/base");

dotenv.config();
mongoose.connect(process.env.DB_CONNECT, () => console.log("Connected to DB"));

//Middleware
app.use(express.json());
// Route middlewares
app.use("/api/user", authRoute);
app.use("/", baseRoute);

// Start server
app.listen(3000, () => console.log("Server up and running"));
