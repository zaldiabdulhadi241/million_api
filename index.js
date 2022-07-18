require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const SiswaRoute = require("./routes/SiswaRoute");

// Environtment Variable
const { PORT } = process.env;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(SiswaRoute);

// Adding Server
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
