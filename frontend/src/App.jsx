import Dashboard from "./Dashboard";
import Products from "./Products";
import Customers from "./Customers";
import Orders from "./Orders";

function App() {
  return (
    <div>
      <header
        style={{
          background: "#0f172a",
          color: "white",
          padding: "25px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}
      >
        <h1 style={{ margin: 0 }}>
          Inventory Order Management System
        </h1>

        <p style={{ marginTop: "8px", opacity: "0.8" }}>
          Product • Customer • Order Management Dashboard
        </p>
      </header>

      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          padding: "20px"
        }}
      >
        <Dashboard />

        <div className="section-card">
          <Products />
        </div>

        <div className="section-card">
          <Customers />
        </div>

        <div className="section-card">
          <Orders />
        </div>
      </div>
    </div>
  );
}

export default App;