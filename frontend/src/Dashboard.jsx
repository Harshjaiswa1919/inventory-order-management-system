import { useEffect, useState } from "react";
import API from "./api";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/dashboard/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>Inventory Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "220px",
          }}
        >
          <h3>Total Products</h3>
          <h1>{data.total_products}</h1>
        </div>

        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "220px",
          }}
        >
          <h3>Total Customers</h3>
          <h1>{data.total_customers}</h1>
        </div>

        <div
          style={{
            background: "#dc2626",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "220px",
          }}
        >
          <h3>Total Orders</h3>
          <h1>{data.total_orders}</h1>
        </div>
      </div>

      <div
        style={{
          marginTop: "25px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Low Stock Products</h2>

        {data.low_stock_products.length === 0 ? (
          <p>No low stock products.</p>
        ) : (
          <ul>
            {data.low_stock_products.map((product) => (
              <li key={product.id}>
                {product.name} - Qty: {product.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;