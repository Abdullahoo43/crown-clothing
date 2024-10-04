import DirectoryItem from "../directory-item/directory-item";
import hats from "../../assets/hats.png";
import arrow from "../../assets/img/arrow.png";

import { DirectoryContainer } from "./directory.styles.jsx";
import "./directory.css";
import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: hats,
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

function customSlice(arr, index, count) {
  const slicedPart = arr.slice(index, count);

  // if(slicedPart.length===count)
  //   return slicedPart

  const remainingPart = arr.slice(0, index);
  const result = slicedPart.concat(remainingPart).slice(0, count);

  return result;
}

const Directory = () => {
  const [firstCategory, setFirstCategory] = useState(0);

  const categoriesToShow = 5;
  return (
    <>
      <ul class="links-container">
        <li class="link-item">
          <a href="#" class="link">
            Hats
          </a>
        </li>
        <li class="link-item">
          <a href="#" class="link">
            Jackets
          </a>
        </li>
        <li class="link-item">
          <a href="#" class="link">
            Sneakers
          </a>
        </li>
        <li class="link-item">
          <a href="#" class="link">
            Men
          </a>
        </li>
        <li class="link-item">
          <a href="#" class="link">
            Women
          </a>
        </li>
      </ul>
      <header class="hero-section">
        <div class="content">
          <img src="" class="logo" alt="" />
          <p class="sub-heading">best fashion collection of all time</p>
        </div>
      </header>
      <section class="product">
        <h2 class="product-category">Our Categories</h2>
      </section>
      <DirectoryContainer>
        {customSlice(categories, firstCategory, categoriesToShow).map(
          (category) => {
            return <DirectoryItem category={category} key={category.id} />;
          }
        )}

        <button
          class="pre-btn"
          onClick={() => {
            if (firstCategory > 0) setFirstCategory((prev) => prev - 1);
            else setFirstCategory(categories.length - 1);
          }}
        >
          <img src={arrow} alt="" />
        </button>
        <button
          class="nxt-btn"
          onClick={() => {
            if (firstCategory < categories.length - 1)
              setFirstCategory((prev) => prev + 1);
            else setFirstCategory(0);
          }}
        >
          <img src={arrow} alt="" />
        </button>
      </DirectoryContainer>
    </>
  );
};

export default Directory;
