import React, { useRef } from "react";
import styles from "./image_upload.module.css";

const ImageUpload = (props: any) => {
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef();
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
