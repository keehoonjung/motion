import React, { useRef } from "react";
import UploadImage from "../../service/upload";
import styles from "./image_upload.module.css";

type ImageUploadProps = {
  uploadService: UploadImage;
};

const ImageUpload = ({ uploadService }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    inputRef.current!.click();
  };
  const uploadFile = async () => {
    const files = inputRef.current!.files;
    console.log(files![0]);

    const file = await uploadService.upload(files![0]);
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
      <button className={styles.uploadbutton} onClick={onClick}>
        Upload
      </button>
      ;
    </>
  );
};

export default ImageUpload;
