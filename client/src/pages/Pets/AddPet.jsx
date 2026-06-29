import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import usePetStore from "../../store/petStore";

function AddPet() {
  const addPet = usePetStore((state) => state.addPet);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.species) {
      return toast.error("Name and Species are required");
    }

    try {
      setLoading(true);

      await addPet(formData);

      toast.success("Pet added successfully");

      setFormData({
        name: "",
        species: "",
        breed: "",
        age: "",
        gender: "",
        weight: "",
        medicalHistory: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add pet"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">
        Add New Pet
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <Input
          label="Pet Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          label="Species"
          name="species"
          value={formData.species}
          onChange={handleChange}
        />

        <Input
          label="Breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />

        <Input
          label="Age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <Input
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />

        <Input
          label="Weight (kg)"
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Medical History
          </label>

          <textarea
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="md:col-span-2">
          <Button type="submit" loading={loading}>
            Add Pet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddPet;