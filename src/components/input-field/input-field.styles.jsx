import styled from "styled-components";

export const InputLabel = styled.h4`
  margin: 0px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  border-width: 1px;
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 0px;
  height: max-content;
  border-color: rgba(17, 17, 17, 0.2);
  background: transparent;
  color: rgb(17, 17, 17);
  opacity: 1;
  width: 100%;
  height: 100%;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  &.half-width {
    width: 50%; /* Adjust to fit with margin */
  }

  &.special-instructions {
    height: 100px;
  }
`;
