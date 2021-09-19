export default class UploadImage {
  url: string;
  preset: string;
  constructor() {
    this.url = "https://api.cloudinary.com/v1_1/dpvhkp8oq/image/upload";
    this.preset = "yl2sbvbf";
  }

  upload = (image: File) => {
    const data = image;
    const formdata = new FormData();
    formdata.append("file", data);
    formdata.append("upload_preset", this.preset);

    return fetch(this.url, {
      method: "POST",
      body: formdata,
    }).then((response) => {
      return response.json();
    });
  };
}
