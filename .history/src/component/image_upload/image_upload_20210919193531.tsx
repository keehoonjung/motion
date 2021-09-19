import React, { useRef } from "react";
import styles from "./image_upload.module.css";

const ImageUpload = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    inputRef.current!.click();
  };
  const uploadFile = async () => {
    const files = inputRef.current!.files;
    console.log(files);

    // const file = await uploadService.upload(files[0]);
    // uploadImage(file.url, file.original_filename);
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
      <button className={styles.uploadbutton} onClick={onclick}>
        Upload
      </button>
      ;
    </>
  );
};

export default ImageUpload;
