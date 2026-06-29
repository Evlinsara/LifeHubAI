import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaPaw,
  FaAppleAlt,
  FaBriefcase,
  FaBrain,
  FaSignOutAlt,
} from "react-icons/fa";

import useAuthStore from "../../store/authStore";

function Sidebar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-white text-blue-600 font-semibold"
        : "text-white hover:bg-blue-500"
    }`;

  return (
    <aside className="w-64 bg-blue-600 text-white flex flex-col justify-between">
      <div>
        <div className="text-3xl font-bold p-6 border-b border-blue-500">
          LifeHubAI
        </div>

        <nav className="p-4 space-y-2">
          <NavLink to="/dashboard" className={linkClass}>
            <FaHome />
            Dashboard
          </NavLink>

          <NavLink to="/profile" className={linkClass}>
            <FaUser />
            Profile
          </NavLink>

          <NavLink to="/pets" className={linkClass}>
            <FaPaw />
            Pets
          </NavLink>

          <NavLink to="/nutrition" className={linkClass}>
            <FaAppleAlt />
            Nutrition
          </NavLink>

          <NavLink to="/workspace" className={linkClass}>
            <FaBriefcase />
            Workspace
          </NavLink>

          <NavLink to="/assessment" className={linkClass}>
            <FaBrain />
            Assessment
          </NavLink>
        </nav>
      </div>

      <div className="p-4 border-t border-blue-500">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-500 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;