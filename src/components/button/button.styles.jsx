import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  font-size: 15px;
  background-color: rgb(97, 97, 97);
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: rgb(68, 68, 68);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

// .button-container {

//

//     &.google-sign-in {
//
//     }

//     &.inverted {
//     }
//   }
