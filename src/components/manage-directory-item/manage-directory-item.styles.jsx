import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;

  // width: 100%;
  // height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

export const Body = styled.div`
  // height: 90px;
  // width: fit-content;
  // padding: 0 25px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // border: 1px solid black;
  // background-color: white;
  // opacity: 0.7;
  // position: relative;
  // box-sizing: border-box;
  // h2 {
  //   font-weight: bold;
  //   margin: 0 6px 0;
  //   font-size: 22px;
  //   color: #4a4a4a;
  //   text-transform: uppercase;
  // }
  color: rgba(0, 42, 58, 1);
  // p {
  //   font-weight: lighter;
  //   font-size: 16px;
  // }
`;

export const DirectoryItemContainer = styled.div`
  // // flex: 1 1 auto;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // border: 1px solid black;
  // margin: 0 7.5px 15px;
  // overflow: hidden;

  // &:hover {
  //   cursor: pointer;

  //   & ${BackgroundImage} {
  //     transform: scale(1.1);
  //     transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  //   }

  //   & ${Body} {
  //     opacity: 0.9;
  //   }
  // }

  // &:first-child {
  //   margin-right: 7.5px;
  // }

  // &:last-child {
  //   margin-left: 7.5px;
  //  }
  border: 1px solid rgba(0, 42, 58, 1);
  border-radius: 5px;
  padding: 5px;
  display: flex;
  gap: 25px;
  align-items: center;
  cursor: pointer;
`;

// .directory-item-container {

//     .background-image {

//     }

//     .body {

//     }
// }
