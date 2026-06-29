import { useNavigate } from "react-router-dom";
import usePetStore from "../../store/petStore";
import toast from "react-hot-toast";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

function PetList() {
  const navigate = useNavigate();

  const { pets, removePet } = usePetStore();

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this pet?")) return;

    try {
      await removePet(id);
      toast.success("Pet deleted");
    } catch {
      toast.error("Couldn't delete pet");
    }
  };

  if (pets.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center mt-6">
        <h2 className="text-2xl font-semibold">
          No Pets Added Yet
        </h2>

        <p className="text-gray-500 mt-2">
          Add your first pet above.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {pets.map((pet) => (
        <div
          key={pet._id}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border">

  {pet.image ? (

    <img
      src={`http://localhost:5000/uploads/${pet.image}`}
      alt={pet.name}
      className="w-full h-full object-cover"
    />

  ) : (

    <div className="text-6xl flex items-center justify-center h-full">
      🐶
    </div>

  )}

</div>

          <h2 className="text-2xl font-bold mt-4">
            {pet.name}
          </h2>

          <p className="text-gray-500">{pet.species}</p>

          <div className="mt-4 space-y-1">
            <p>Breed: {pet.breed || "-"}</p>
            <p>Age: {pet.age} years</p>
            <p>Weight: {pet.weight} kg</p>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => navigate(`/pets/${pet._id}`)}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaEye />
            </button>

            <button className="text-green-600 hover:text-green-800">
              <FaEdit />
            </button>

            <button
              onClick={() => handleDelete(pet._id)}
              className="text-red-600 hover:text-red-800"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PetList;