import "./order-item.css";

const OrderItem = ({ item }) => {
  const { name, imageUrl, quantity, price, id } = item;
  return (
    <div className="order-item-container">
      <div className="order-item-image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <p>{name}</p>
      <p>Qty: {quantity}</p>
      <p>${price}</p>
    </div>
  );
};

export default OrderItem;
