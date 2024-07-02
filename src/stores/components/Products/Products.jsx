import React from "react";
import ProductComponent from "./ProductComponent";
import { menData } from "../../data/men";
import { womanData } from "../../data/woman";
import { mobileData } from "../../data/mobiles";
import { acData} from "../../data/ac"
import { fridgeData } from "../../data/fridge";
import { furnitureData } from "../../data/furniture";
import { speakerData } from "../../data/speaker";
import { booksData } from "../../data/books";
import { kitchenData } from "../../data/kitchen";
import { tvData } from "../../data/tv";
import { watchData } from "../../data/watch";
import { computerData } from "../../data/computers";
const Products = () => {
  return (
    <div>
      <ProductComponent categoryData={menData} categoryName="Mens Wear" routeTo="men" />
      <ProductComponent categoryData={womanData} categoryName="Women Fashion" routeTo="woman" />
      <ProductComponent categoryData={mobileData} categoryName="Mobiles" routeTo="mobiles"/>
      <ProductComponent categoryData={acData} categoryName="AC" routeTo="ac"/>
      <ProductComponent categoryData={computerData} categoryName="Computers" routeTo="computer" />
      <ProductComponent categoryData={fridgeData} categoryName="Fridges" routeTo="fridge"/>
      <ProductComponent categoryData={furnitureData} categoryName="Furniture" routeTo="furniture" />
      <ProductComponent categoryData={speakerData} categoryName="Speakers" routeTo="speaker" />
      <ProductComponent categoryData={booksData} categoryName="Books" routeTo="book" />
      <ProductComponent categoryData={kitchenData} categoryName="Kitchen" routeTo="kitchen" />
      <ProductComponent categoryData={tvData} categoryName="TV" routeTo="tv" />
      <ProductComponent categoryData={watchData} categoryName="Watches" routeTo="watch" />      
   
    </div>
  );
};

export default Products;
