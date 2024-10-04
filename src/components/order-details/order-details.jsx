import OrderItem from "../order-item/order-item";
import "./order-details.scss";

import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const { order } = location.state || {};
  const {
    fullName,
    items,
    totalPrice,
    address,
    phoneNumber,
    email,
    date,
    status,
    specialInstructions,
  } = order;
  console.log("lets see the order", order);
  return (
    <div className="order-details-container">
      <div className="customer-name-container">
        <p>Order from </p>
        <h3>{fullName}</h3>
      </div>
      <div className="order-items-container">
        {items.map((item) => (
          <OrderItem item={item} />
        ))}
      </div>
      <h3>Order Details</h3>
      <div className="order-details">
        <div>
          <p>Date: {date}</p>
          <p>Status: {status}</p>
          <p>Instructions: {specialInstructions}</p>
        </div>
        <div className="order-contact-details">
          <p>Address: {address}</p>
          <p>Phone number: {phoneNumber}</p>
          <p>Email: {email}</p>
        </div>
      </div>
      <div className="order-amount-container">
        <p>Total Amount: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
