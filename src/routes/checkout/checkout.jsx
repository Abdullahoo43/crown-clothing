import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selector";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import PaymentForm from "../../components/payment-form/payment-form";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

import CustomerDetails from "../../components/customer-details/customer-details";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>

      {/* <form>
        <FormInput label="Password" type="password" required name="password" />
         <label>
            <Heading4>Full Name</Heading4>
          </label>
          <input placeholder="full name"></input> 

        <ContactInfo>
          <FormInput
            label="Password"
            type="password"
            required
            name="password"
          />
          <FormInput
            label="Password"
            type="password"
            required
            name="password"
          />
        </ContactInfo>
        <CustomerInput>
          <label>
            <Heading4>Complete Address</Heading4>
          </label>
          <input placeholder="Complete Address" />
        </CustomerInput>
        <CustomerInput>
          <label>
            <Heading4>Special Instructions</Heading4>
          </label>
          <input placeholder="Special Instructions" />
        </CustomerInput>
        <button type="submit">Confirm Order</button>
      </form> */}

      <CustomerDetails cartItems={cartItems} cartTotal={cartTotal} />
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
