const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const authRoutes = require("./routes/auth.routes");
const petRoutes = require("./routes/pet.routes");
const app = express();
const path = require("path");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "LifeHub API Running",
  });
});

module.exports = app;