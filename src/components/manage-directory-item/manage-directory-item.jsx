import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./manage-directory-item.styles.jsx";

const ManageDirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl}></BackgroundImage>
      <Body>
        <h3>{title}</h3>
      </Body>
    </DirectoryItemContainer>
  );
};

export default ManageDirectoryItem;
