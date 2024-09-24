import { useSelector } from "react-redux";
import { selectOrders } from "../../store/order/order-selector";
import OrderItem from "../../components/order-item/order-item";
import {
  HeaderBlock,
  OrdersContainer,
  OrdersHeader,
} from "./manage-orders.styles";

const ManageOrders = () => {
  const ordersArray = useSelector(selectOrders);
  return (
    <OrdersContainer>
      <OrdersHeader>
        <HeaderBlock>
          <span>id</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>date</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>customer</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>status</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>totalPrice</span>
        </HeaderBlock>
      </OrdersHeader>
      {ordersArray.orders.map((order, index) => (
        <OrderItem key={index + 1} order={order} id={index + 1} />
      ))}
    </OrdersContainer>
  );
};

export default ManageOrders;
