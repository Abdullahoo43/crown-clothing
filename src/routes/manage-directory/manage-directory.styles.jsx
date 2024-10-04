import styled from "styled-components";

export const ManageDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  h1 {
    color: rgba(52, 79, 95, 1);
  }
`;

export const ManageDirectoryItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  //   width: 70%;
`;

export const AddCategoryButton = styled.button`
  cursor: pointer;
  background-color: white;
  border: 1px solid rgba(0, 42, 58, 1);
  border-radius: 5px;

  span {
    font-size: 50px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;
