import React, { useRef, useState } from "react";
import UploadImage from "../../service/upload";
import styles from "./image_upload.module.css";

type ImageUploadProps = {
  uploadService: UploadImage;
  uploadImage: (uploadUrl: string) => void;
};

const ImageUpload = ({ uploadService, uploadImage }: ImageUploadProps) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    inputRef.current!.click();
  };
  const uploadFile = async () => {
    const files = inputRef.current!.files;
    const file = await uploadService.upload(files![0]);
    uploadImage(file.url);
  };
  return (
    <>
      {!loading && (
        <button className={styles.uploadbutton} onClick={onClick}>
          Upload
        </button>
      )}
      {loading && (
        <div className={styles.loading}>
          <i className="fas fa-spinner"></i>
        </div>
      )}
      <input
        className={styles.input}
        accept="image/*"
        ref={inputRef}
        type="file"
        onChange={uploadFile}
      />
    </>
  );
};

export default ImageUpload;
