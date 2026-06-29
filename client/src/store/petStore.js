import { create } from "zustand";

import {
  createPet,
  getPets,
  getPet,
  updatePet,
  deletePet,
  uploadPetImage,
} from "../services/pet.service";

const usePetStore = create((set) => ({
  pets: [],
  selectedPet: null,
  loading: false,

  fetchPets: async () => {
    set({ loading: true });

    try {
      const res = await getPets();

      set({
        pets: res.pets,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  fetchPet: async (id) => {
  const res = await getPet(id);

  set({
    selectedPet: res.pet,
  });

  return res;
},
  addPet: async (petData) => {
    const res = await createPet(petData);

    set((state) => ({
      pets: [...state.pets, res.pet],
    }));

    return res;
  },
  uploadImage: async (id, image) => {
  const res = await uploadPetImage(id, image);

  set((state) => ({
    pets: state.pets.map((pet) =>
      pet._id === id ? res.pet : pet
    ),
    selectedPet: res.pet,
  }));

  return res;
},

editPet: async (id, petData) => {
  const res = await updatePet(id, petData);

  set((state) => ({
    pets: state.pets.map((pet) =>
      pet._id === id ? res.pet : pet
    ),
    selectedPet: res.pet,
  }));

  return res;
},

removePet: async (id) => {
  await deletePet(id);

  set((state) => ({
    pets: state.pets.filter((pet) => pet._id !== id),
    selectedPet: null,
  }));
},
}));

export default usePetStore;