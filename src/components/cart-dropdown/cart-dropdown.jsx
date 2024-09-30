import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart-selector.js";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import { useEffect } from "react";
import { setIsCartOpen } from "../../store/cart/cart-action.js";

const CartDropdown = ({ handleClickOutside }) => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    if (isCartOpen) dispatch(setIsCartOpen(false));
    navigate("/checkout");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
