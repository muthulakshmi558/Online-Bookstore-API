import axios from "axios";

const API = axios.create({
  baseURL: "https://online-bookstore-api-60hc.onrender.com/api/",
});

export default API;
