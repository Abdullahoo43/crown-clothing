import styled from "styled-components";

export const OrdersContainer = styled.div`
  padding: 10px 17px;
  width: 95%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;
  border-radius: 16px;
  background-color: #f7f7f7;
`;

export const OrdersHeader = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(204, 212, 215);
`;

export const HeaderBlock = styled.h3`
  text-transform: capitalize;
  width: 23%;
  display: flex;
  // justify-content: center;
  margin: 0;
  font-size: 15px;
  color: rgb(52, 79, 95);
`;
