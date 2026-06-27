import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;