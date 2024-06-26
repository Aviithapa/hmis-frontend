import axios from "axios";

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
