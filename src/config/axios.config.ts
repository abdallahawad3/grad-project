import CookieServices from "../services/index";
import axios from "axios";
const Api = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: Api,
  headers: {
    Authorization: `Bearer ${CookieServices.get("token")}`,
  },
});
