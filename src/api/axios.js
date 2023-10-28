import axios from "axios";
import { BASE_URL } from "../config/config";
export default axios.create(
  {
    baseURL: BASE_URL,
    // baseURL: "http://code.webspeed.online:3001/api",
  },
  {
    withCredentials: true,
  }
);

export const CancelToken = axios.CancelToken;
