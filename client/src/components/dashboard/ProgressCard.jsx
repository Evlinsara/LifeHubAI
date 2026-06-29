function ProgressCard() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Weekly Progress
      </h2>

      <p className="text-gray-500 mb-3">
        Overall Productivity
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: "78%" }}
        ></div>
      </div>

      <p className="mt-4 text-4xl font-bold">
        78%
      </p>

    </div>
  );
}

export default ProgressCard;