import React from "react";
import styles from "./image_upload.module.css";

const ImageUpload = (props: any) => {
  return (
    <>
      <input
        className={styles.input}
        accept="image/*"
        ref={inputRef}
        type="file"
        onChange={uploadFile}
      />
      <button className={styles.uploadbutton}>Upload</button>;
    </>
  );
};

export default ImageUpload;
