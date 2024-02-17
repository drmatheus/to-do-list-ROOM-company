import axios from "axios";

export const api = axios.create({
  baseURL: "localhost:3001/",
  timeout: 5000,
});
