import { useSelector } from "react-redux";
import { selectOrders } from "../../store/order/order-selector";
import OrdersItem from "../../components/orders-item/orders-item";
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
        <OrdersItem key={order.id} order={order} />
      ))}
    </OrdersContainer>
  );
};

export default ManageOrders;
