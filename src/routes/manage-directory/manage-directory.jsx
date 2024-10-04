import hats from "../../assets/hats.png";

import {
  AddCategoryButton,
  ManageDirectoryContainer,
  ManageDirectoryItemsList,
} from "./manage-directory.styles";
import ManageDirectoryItem from "../../components/manage-directory-item/manage-directory-item";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: hats,
    route: "hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "sneakers",
  },
  {
    id: 4,
    title: "women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "womens",
  },
  {
    id: 5,
    title: "men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "mens",
  },
];

const ManageDirectory = () => {
  return (
    <ManageDirectoryContainer>
      <h1>Directory Management</h1>
      <ManageDirectoryItemsList>
        {categories.map((category) => {
          return <ManageDirectoryItem category={category} key={category.id} />;
        })}
        <AddCategoryButton>
          <span>&#43;</span>
        </AddCategoryButton>
      </ManageDirectoryItemsList>
    </ManageDirectoryContainer>
  );
};

export default ManageDirectory;
