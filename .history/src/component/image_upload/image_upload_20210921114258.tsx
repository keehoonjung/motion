import React, { memo, useEffect, useRef, useState } from "react";
import UploadImage from "../../service/upload";
import styles from "./image_upload.module.css";

type ImageUploadProps = {
  uploadService: UploadImage;
  uploadImage: (uploadUrl: string) => void;
};

const ImageUpload = memo(({ uploadService, uploadImage }: ImageUploadProps) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [name, setName] = useState<Boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    inputRef.current!.click();
  };

  const uploadFile = async () => {
    setLoading(true);
    const files = inputRef.current!.files;
    const file = await uploadService.upload(files![0]);
    setLoading(false);
    setName(true);
    uploadImage(file.url);
  };

  useEffect(() => {
    setLoading(false);
    setName(false);
  }, []);

  return (
    <div className={styles.container}>
      {!loading && (
        <button className={styles.uploadbutton} onClick={onClick}>
          {name ? "Done" : "Upload"}
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
    </div>
  );
});

export default ImageUpload;
