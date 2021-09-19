export default class UploadImage {
  constructor() {
    this.url = "https://api.cloudinary.com/v1_1/dpvhkp8oq/image/upload";
    this.preset = "yl2sbvbf";
  }

  upload = (image) => {
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
