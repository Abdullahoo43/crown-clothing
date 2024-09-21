import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const ButtonSpan = styled.span`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const AddProductInput = styled.input`
  font-size: 25px;
  border: none;
  border-bottom: 1px solid black;
`;

export const AddProductForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
`;
