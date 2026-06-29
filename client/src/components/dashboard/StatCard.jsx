function StatCard({ title, value, icon, color }) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            text-3xl
            bg-gray-100
            ${color}
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}

export default StatCard;