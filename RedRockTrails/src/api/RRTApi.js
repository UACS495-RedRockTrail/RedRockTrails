import axios from "axios";

export default axios.create({
  baseUrl: "https://my.api.mockaroo.com",
  headers: {
    "X-API-Key": "e87d1720",
    Authorization: "Bearer e87d1720",
  },
});
