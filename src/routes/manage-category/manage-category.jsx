import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ManageCategoryItem from "../../components/manage-category-item/manage-category-item";
import Spinner from "../../components/spinner/spinner";
import Button from "../../components/button/button";

import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/category-selector";

import {
  CategoryContainer,
  Title,
  ButtonSpan,
  AddProductInput,
  AddProductForm,
} from "../manage-category/manage-category.styles";

import { addProductStart } from "../../store/categories/category-action";

const ManageCategory = () => {
  const dispatch = useDispatch();

  const { category } = useParams();

  const isLoading = useSelector(selectIsCategoriesLoading);
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const onAddProduct = () => {
    dispatch(
      addProductStart(category, {
        id: products.at(-1).id + 1,
        imageUrl,
        name,
        price,
      })
    );
  };
  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>

      {console.log("check", categoriesMap)}
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          <AddProductForm>
            <AddProductInput
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <AddProductInput
              placeholder="price"
              type="number"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <AddProductInput
              placeholder="image url"
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button onClick={onAddProduct}>add product</Button>
          </AddProductForm>
          <ButtonSpan></ButtonSpan>
          {products &&
            products
              .slice()
              .reverse()
              .map((product) => (
                <ManageCategoryItem
                  key={product.id}
                  product={product}
                  category={category}
                />
              ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default ManageCategory;
