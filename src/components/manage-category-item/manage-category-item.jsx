import { useDispatch } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
} from "./manage-category-item.styles";
import { removeProductStart } from "../../store/categories/category-action";

const ManageCategoryItem = ({ product, category }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price } = product;

  const onDeleteProduct = () => {
    dispatch(removeProductStart(category, product));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <BaseSpan> ${price}/-</BaseSpan>
      <Button buttonType={BUTTON_TYPE_CLASSES.crud}>update product</Button>
      <Button onClick={onDeleteProduct} buttonType={BUTTON_TYPE_CLASSES.crud}>
        delete product
      </Button>
    </CheckoutItemContainer>
  );
};

export default ManageCategoryItem;
