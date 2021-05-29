import axios from "axios";

class AxiosRequest {
  url = "https://api.thecatapi.com/v1/";

  /* Normally you don t hard code the Api key */
  apiKey = "71b7e323-2e8a-4215-9e03-87b095f1f4e4";

  async getCatBreed() {
    const data = await axios({
      method: "get",
      url: this.url + "breeds",
    });
    return data.data;
  }
}

export default new AxiosRequest();
