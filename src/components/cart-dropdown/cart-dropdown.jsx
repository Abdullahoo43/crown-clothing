import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../store/cart/cart-selector.js";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
