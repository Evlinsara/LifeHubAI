import { FaRobot } from "react-icons/fa";

function AIWidget() {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-xl">

      <FaRobot className="text-6xl mb-5" />

      <h2 className="text-3xl font-bold">
        LifeHub AI
      </h2>

      <p className="mt-3 opacity-90">
        Ask anything about your pets, nutrition,
        productivity or wellness.
      </p>

      <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold">
        Ask AI
      </button>

    </div>
  );
}

export default AIWidget;