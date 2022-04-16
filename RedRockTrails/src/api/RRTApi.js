import axios from "axios";

export default axios.create({
  baseURL: "https://redrocktrailsapi.azurewebsites.net/api/v1/"
})

// https://redrocktrailsapi.azurewebsites.net/api/v1/