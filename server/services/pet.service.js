const Pet = require("../models/pet.model");

const createPet = async (petData) => {
  return await Pet.create(petData);
};

const getAllPets = async (ownerId) => {
  return await Pet.find({ owner: ownerId });
};

const getPetById = async (petId, ownerId) => {
  return await Pet.findOne({
    _id: petId,
    owner: ownerId,
  });
};



const updatePet = async (petId, ownerId, updateData) => {
  return await Pet.findOneAndUpdate(
    {
      _id: petId,
      owner: ownerId,
    },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
};

const deletePet = async (petId, ownerId) => {
  return await Pet.findOneAndDelete({
    _id: petId,
    owner: ownerId,
  });
};

module.exports = {
  createPet,
  getAllPets,
  getPetById,
 
  updatePet,
  deletePet,
};