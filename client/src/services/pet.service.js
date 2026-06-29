import axios from "../api/axios";

export const createPet = async (petData) => {
  const response = await axios.post("/pets", petData);
  return response.data;
};

export const getPets = async () => {
  const response = await axios.get("/pets");
  return response.data;
};

export const getPet = async (id) => {
  const response = await axios.get(`/pets/${id}`);
  return response.data;
};

export const updatePet = async (id, petData) => {
  const response = await axios.put(`/pets/${id}`, petData);
  return response.data;
};

export const deletePet = async (id) => {
  const response = await axios.delete(`/pets/${id}`);
  return response.data;
};

export const uploadPetImage = async (id, image) => {
  const formData = new FormData();

  formData.append("image", image);

  const response = await axios.post(
    `/pets/${id}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};