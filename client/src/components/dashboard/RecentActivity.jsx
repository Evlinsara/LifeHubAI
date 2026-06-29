import {
  FaCheckCircle,
  FaPaw,
  FaAppleAlt,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaPaw className="text-blue-500" />,
    title: "Added Bruno's vaccination record",
    time: "2 hours ago",
  },
  {
    icon: <FaAppleAlt className="text-green-500" />,
    title: "Nutrition plan updated",
    time: "Yesterday",
  },
  {
    icon: <FaCheckCircle className="text-purple-500" />,
    title: "Assessment completed",
    time: "2 days ago",
  },
];

function RecentActivity() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b pb-4 last:border-none"
          >
            <div className="text-2xl">{item.icon}</div>

            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;