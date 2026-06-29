const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    species: {
      type: String,
      required: true,
      trim: true,
    },

    breed: {
      type: String,
      default: "",
    },

    age: {
      type: Number,
      default: 0,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Unknown"],
      default: "Unknown",
    },

    weight: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      default: "",
    },

    medicalHistory: {
      type: String,
      default: "",
    },

    vaccinations: [
      {
        name: String,
        date: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pet", petSchema);