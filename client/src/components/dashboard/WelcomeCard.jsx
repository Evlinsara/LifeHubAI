import { FaRobot } from "react-icons/fa";

function WelcomeCard() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-8 text-white shadow-xl">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back, Evlin 👋
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Ready to make today productive with LifeHubAI?
          </p>

          <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Explore Dashboard
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center w-28 h-28 rounded-full bg-white/20">
          <FaRobot className="text-6xl" />
        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;