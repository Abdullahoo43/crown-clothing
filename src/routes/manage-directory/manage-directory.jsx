import DirectoryItem from "../../components/directory-item/directory-item";
import hats from "../../assets/hats.png";

import { DirectoryContainer } from "../../components/directory/directory.styles";
import { Fragment } from "react";

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
    <Fragment>
      <h1>Directory management</h1>
      <DirectoryContainer>
        {categories.map((category) => {
          return <DirectoryItem category={category} key={category.id} />;
        })}
      </DirectoryContainer>
    </Fragment>
  );
};

export default ManageDirectory;
