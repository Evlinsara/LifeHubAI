import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import usePetStore from "../../store/petStore";

function PetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    selectedPet,
    fetchPet,
    removePet,
    uploadImage,
  } = usePetStore();

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchPet(id);
  }, [id]);

  const handleUpload = async () => {
    if (!image) {
      toast.error("Please select an image first");
      return;
    }

    try {
      await uploadImage(id, image);
      toast.success("Image uploaded successfully");
      setImage(null);
    } catch (error) {
      toast.error("Upload failed");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this pet?")) return;

    try {
      await removePet(id);
      toast.success("Pet deleted");
      navigate("/pets");
    } catch (error) {
      toast.error("Couldn't delete pet");
    }
  };

  if (!selectedPet) {
    return (
      <DashboardLayout>
        <div className="text-center py-10">
          <p className="text-xl">Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Back Button */}
      <button
        onClick={() => navigate("/pets")}
        className="flex items-center gap-2 text-blue-600 mb-6 hover:text-blue-800"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="flex items-center gap-8">

          {/* Pet Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200">

            {selectedPet.image ? (
              <img
                src={`http://localhost:5000/uploads/${selectedPet.image}`}
                alt={selectedPet.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-7xl bg-gray-100">
                🐶
              </div>
            )}

          </div>

          {/* Pet Name */}
          <div>
            <h1 className="text-4xl font-bold">
              {selectedPet.name}
            </h1>

            <p className="text-gray-500 text-lg mt-2">
              {selectedPet.species}
            </p>
          </div>

        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-gray-100 rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Basic Information
            </h2>

            <p><strong>Breed:</strong> {selectedPet.breed || "-"}</p>

            <p><strong>Age:</strong> {selectedPet.age || "-"}</p>

            <p><strong>Gender:</strong> {selectedPet.gender || "-"}</p>

            <p><strong>Weight:</strong> {selectedPet.weight || "-"} kg</p>

          </div>

          <div className="bg-gray-100 rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Medical History
            </h2>

            <p>
              {selectedPet.medicalHistory ||
                "No medical history added."}
            </p>

          </div>

        </div>

        {/* Upload Image */}
        <div className="mt-8">

          <h2 className="text-lg font-semibold mb-3">
            Upload Pet Image
          </h2>

          <div className="flex items-center gap-4">

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="border rounded-lg p-2"
            />

            <button
              onClick={handleUpload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              Upload
            </button>

          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-10">

          <button
            onClick={() => navigate(`/pets/edit/${id}`)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FaEdit />
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default PetDetails;