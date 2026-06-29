const { createPet,getAllPets,
  getPetById,
  updatePet,
  deletePet, } = require("../services/pet.service");
const Pet = require("../models/pet.model");
const addPet = async (req, res) => {
  try {
    const pet = await createPet({
      ...req.body,
      owner: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Pet added successfully",
      pet,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const getPets = async (req, res) => {
  try {
    const pets = await getAllPets(req.user._id);

    res.status(200).json({
      success: true,
      pets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPet = async (req, res) => {
  try {
    const pet = await getPetById(req.params.id, req.user._id);

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found",
      });
    }

    res.status(200).json({
      success: true,
      pet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const uploadPetImage = async (req, res) => {
  try {
    const pet = await Pet.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    pet.image = req.file.filename;

    await pet.save();

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      pet,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const editPet = async (req, res) => {
  try {
    const pet = await updatePet(
      req.params.id,
      req.user._id,
      req.body
    );

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Pet updated successfully",
      pet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const removePet = async (req, res) => {
  try {
    const pet = await deletePet(
      req.params.id,
      req.user._id
    );

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Pet deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addPet,
   getPets,
  getPet,
  editPet,
  removePet,
  uploadPetImage,
};