import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../button/button";

import {
  ButtonContainer,
  CustomerContactContainer,
  CustomerDetailsContainer,
  CustomerDetailsForm,
  InstructionsContainer,
} from "./customer-details.styles";

import InputField from "../input-field/input-field";
import { addOrderStart } from "../../store/order/order-action";
import { ORDER_STATUS_TYPES } from "../../store/order/order-types";

const defaultFormFields = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  specialInstructions: "",
};

const CustomerDetails = ({ cartItems, cartTotal }) => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fullName, email, phoneNumber, address, specialInstructions } =
    formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;

    const completeOrderDetail = {
      ...formFields,
      items: cartItems,
      totalPrice: cartTotal,
      status: ORDER_STATUS_TYPES.PENDING,
      date: formattedDate,
    };

    try {
      dispatch(addOrderStart(completeOrderDetail));
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <CustomerDetailsContainer>
      <InstructionsContainer>
        <h2 style={{ margin: 0 }}>Enter Your Details</h2>
        <span>Please fill out this form to confirm your order.</span>
      </InstructionsContainer>
      <CustomerDetailsForm onSubmit={handleSubmit}>
        <InputField
          required
          type={"text"}
          label={"Full Name"}
          name="fullName"
          onChange={handleChange}
          value={fullName}
          placeholder={"Enter your full name"}
        />

        <CustomerContactContainer>
          <InputField
            type={"email"}
            label={"Email"}
            name="email"
            onChange={handleChange}
            value={email}
            placeholder={"Enter your email address"}
            groupClassName={"half-width"}
          />
          <InputField
            required
            type={"text"}
            label={"Phone Number"}
            name="phoneNumber"
            onChange={handleChange}
            value={phoneNumber}
            placeholder={"Enter your phone number"}
            groupClassName={"half-width"}
          />
        </CustomerContactContainer>
        <InputField
          required
          type={"text"}
          label={"Complete Address"}
          name="address"
          onChange={handleChange}
          value={address}
          placeholder={"Enter your shipping address"}
        />
        <InputField
          type={"text"}
          label={"Special Instructions"}
          name="specialInstructions"
          onChange={handleChange}
          value={specialInstructions}
          placeholder={"Enter any special instructions for your order"}
          groupClassName={"special-instructions"}
        />

        <ButtonContainer>
          <Button type="submit" className={"half-width"}>
            Confirm Order
          </Button>
        </ButtonContainer>
      </CustomerDetailsForm>
    </CustomerDetailsContainer>
  );
};

export default CustomerDetails;
