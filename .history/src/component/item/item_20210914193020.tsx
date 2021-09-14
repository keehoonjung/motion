import React from "react";
import ImageItem from "../image_item/image_item";
import styles from "./item.module.css";

const Item = (props: any) => {
  return (
    <ul>
      <ImageItem />
    </ul>
  );
};

export default Item;
