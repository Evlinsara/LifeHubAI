const app = require("./app");
require("dotenv").config();

const mongoose = require("mongoose");

console.log("Starting server...");
console.log("Mongo URI exists:", !!process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:");
    console.error(err);
  });