import { useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import usePetStore from "../../store/petStore";

import AddPet from "./AddPet";
import PetList from "./PetList";

function Pets() {
  const { fetchPets, loading } = usePetStore();

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            My Pets 🐾
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your pets in one place.
          </p>
        </div>
      </div>

      <AddPet />

      {loading ? (
        <p className="mt-6">Loading pets...</p>
      ) : (
        <PetList />
      )}
    </DashboardLayout>
  );
}

export default Pets;