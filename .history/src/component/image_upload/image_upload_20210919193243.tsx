import React, { useRef } from "react";
import styles from "./image_upload.module.css";

const ImageUpload = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const uploadFile = async () => {
    setLoading(true);
    const files = inputRef.current.files;
    const file = await uploadService.upload(files[0]);
    setLoading(false);
    uploadImage(file.url, file.original_filename);
  };
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
