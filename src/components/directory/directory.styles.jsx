import styled from "styled-components";

export const DirectoryContainer = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 0 10vw;
  scroll-behavior: smooth;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;
