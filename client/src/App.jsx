import { Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pets from "./pages/Pets/Pets";
import PetDetails from "./pages/Pets/PetDetails";
import EditPet from "./pages/Pets/EditPet";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/pets"
        element={
          <ProtectedRoute>
            <Pets />
          </ProtectedRoute>
        }
      />
          <Route
      path="/pets/edit/:id"
      element={
        <ProtectedRoute>
          <EditPet />
        </ProtectedRoute>
      }
    />
      <Route
        path="/pets/:id"
        element={
          <ProtectedRoute>
            <PetDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;