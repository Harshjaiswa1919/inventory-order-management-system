import { useEffect, useState } from "react";
import API from "./api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    customer_id: "",
    product_id: "",
    quantity: ""
  });

  useEffect(() => {
    fetchOrders();
    fetchCustomers();
    fetchProducts();
  }, []);

  const fetchOrders = () => {
    API.get("/orders/")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  const fetchCustomers = () => {
    API.get("/customers/")
      .then((res) => setCustomers(res.data))
      .catch((err) => console.log(err));
  };

  const fetchProducts = () => {
    API.get("/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const createOrder = async () => {
    try {
      await API.post("/orders/", {
        customer_id: Number(formData.customer_id),
        product_id: Number(formData.product_id),
        quantity: Number(formData.quantity)
      });

      setFormData({
        customer_id: "",
        product_id: "",
        quantity: ""
      });

      fetchOrders();
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Order creation failed");
    }
  };

  const deleteOrder = async (id) => {
    try {
      await API.delete(`/orders/${id}`);
      fetchOrders();
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders</h1>

      <div>
        <select
          value={formData.customer_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              customer_id: e.target.value
            })
          }
        >
          <option value="">Select Customer</option>

          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.full_name}
            </option>
          ))}
        </select>

        <select
          value={formData.product_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              product_id: e.target.value
            })
          }
        >
          <option value="">Select Product</option>

          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({
              ...formData,
              quantity: e.target.value
            })
          }
        />

        <button onClick={createOrder}>
          Create Order
        </button>
      </div>

      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_id}</td>
              <td>{order.product_id}</td>
              <td>{order.quantity}</td>
              <td>{order.total_amount}</td>

              <td>
                <button
                  onClick={() => deleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;