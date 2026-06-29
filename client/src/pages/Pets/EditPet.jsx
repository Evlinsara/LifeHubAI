import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import usePetStore from "../../store/petStore";

function EditPet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedPet, fetchPet, editPet } = usePetStore();

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    weight: "",
    gender: "",
  });

  useEffect(() => {
    fetchPet(id);
  }, [id]);

  useEffect(() => {
    if (selectedPet) {
      setFormData({
        name: selectedPet.name || "",
        species: selectedPet.species || "",
        breed: selectedPet.breed || "",
        age: selectedPet.age || "",
        weight: selectedPet.weight || "",
        gender: selectedPet.gender || "",
      });
    }
  }, [selectedPet]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await editPet(id, formData);
      toast.success("Pet updated successfully");
      navigate(`/pets/${id}`);
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Edit Pet
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow space-y-5"
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Pet Name"
          className="w-full border rounded-lg p-3"
        />

        <input
          name="species"
          value={formData.species}
          onChange={handleChange}
          placeholder="Species"
          className="w-full border rounded-lg p-3"
        />

        <input
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          placeholder="Breed"
          className="w-full border rounded-lg p-3"
        />

        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border rounded-lg p-3"
        />

        <input
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight"
          className="w-full border rounded-lg p-3"
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Update Pet
        </button>
      </form>
    </DashboardLayout>
  );
}

export default EditPet;