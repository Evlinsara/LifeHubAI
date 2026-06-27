function Button({
  children,
  type = "button",
  onClick,
  loading,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;