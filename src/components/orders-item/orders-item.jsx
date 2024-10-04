import { OrdersItemContainer, Span } from "./orders-item.styles";

import { useNavigate } from "react-router-dom";

const OrdersItem = ({ order }) => {
  const navigate = useNavigate();
  return (
    <OrdersItemContainer
      onClick={() => {
        navigate(`${order.id}`, { state: { order } });
      }}
    >
      <Span>{order.id}</Span>
      <Span>{String(order.date)}</Span>
      <Span>{order.fullName}</Span>
      <Span>{order.status}</Span>
      <Span>${order.totalPrice}</Span>
    </OrdersItemContainer>
  );
};

export default OrdersItem;
