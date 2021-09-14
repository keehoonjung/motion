import React from "react";
import styles from "./image_item.module.css";

const ImageItem = (props: any) => {
  return (
    <li>
      <img src="https://picsum.photos/200/300" alt="" />
      <div>
        <h2>Title</h2>
        <p> Hello</p>
      </div>
    </li>
  );
};

export default ImageItem;
