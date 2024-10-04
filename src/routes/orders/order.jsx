import { Route, Routes } from "react-router-dom";
import ManageOrders from "../manage-orders/manage-orders";
import OrderDetails from "../../components/order-details/order-details";

const Orders = () => {
  return (
    <Routes>
      <Route index element={<ManageOrders />} />
      <Route path=":orderId" element={<OrderDetails />} />
    </Routes>
  );
};

export default Orders;
