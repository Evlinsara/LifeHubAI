import {
  FaPaw,
  FaAppleAlt,
  FaPlus,
  FaBrain,
} from "react-icons/fa";

const actions = [
  {
    title: "Add Pet",
    icon: <FaPaw />,
    color: "bg-blue-500",
  },
  {
    title: "Add Meal",
    icon: <FaAppleAlt />,
    color: "bg-green-500",
  },
  {
    title: "New Task",
    icon: <FaPlus />,
    color: "bg-orange-500",
  },
  {
    title: "Assessment",
    icon: <FaBrain />,
    color: "bg-purple-500",
  },
];

function QuickActions() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((item) => (

          <button
            key={item.title}
            className={`
              ${item.color}
              text-white
              rounded-2xl
              p-5
              flex
              flex-col
              items-center
              justify-center
              hover:scale-105
              transition
            `}
          >

            <div className="text-3xl mb-3">
              {item.icon}
            </div>

            {item.title}

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;