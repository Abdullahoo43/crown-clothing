import { OrderItemContainer, Span } from "./order-item.styles";

const OrderItem = ({ order, id }) => {
  return (
    <OrderItemContainer>
      <Span>{id}</Span>
      <Span>{String(order.date)}</Span>
      <Span>{order.fullName}</Span>
      <Span>{order.status}</Span>
      <Span>${order.totalPrice}</Span>
    </OrderItemContainer>
  );
};

export default OrderItem;
