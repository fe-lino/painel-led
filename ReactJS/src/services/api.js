import axios from "axios";

const api = axios.create({
  baseURL: "https://tccbackend.azurewebsites.net/index.html",
});

export default api;