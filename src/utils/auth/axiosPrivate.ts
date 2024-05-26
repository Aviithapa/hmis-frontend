
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// Returns Bearer Token; also solve the srr issues that localstorage is not defined
const setBearerToken = () => {
  let accessToken = "";
  // if (typeof window !== undefined) {
  accessToken = (global?.localStorage?.getItem("accessToken") as string) || "";
  // }
  return `Bearer ${accessToken}`;
};

const setRefreshToken = () => {
  let refreshToken = "";

  // if (typeof window !== undefined) {
  refreshToken =
    (global?.localStorage?.getItem("refreshToken") as string) || "";
  // }
  return refreshToken;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const authHttpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",

    Accept: "application/json",
    Authorization: setBearerToken(),
  },
});

// DON'T REMOVE THE COMMENTED CODE BEOLOW

// authHttpClient.defaults.baseURL = "https://sifaris.ktmserver.com/backend";

// type headers = {
//   "Content-Type": string;
//   Accept: string;
//   Authorization: string;
// };

// authHttpClient.defaults.headers = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// } as headers & HeadersDefaults & { [key: string]: AxiosHeaderValue };

// add access token in every outgoing request

// sets the access token in the authorization header before sending any request
// const setTokenHeader = (ex: AxiosInstance, token: string) => {
//   ex.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

interface RefreshTokenSuccessResponseType {
  token_type: string;
  expires_in: string;
  access_token: string;
  refresh_token: string;
  status: number;
  message: string;
}

// refresh acesstoken if access token it invalid first time.
authHttpClient.interceptors.response.use(
  (response) => response,
  async (err: AxiosError) => {
    const originalConfig = err.config as InternalAxiosRequestConfig<any> & {
      _retry: boolean;
    };

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const res = await axios.post<RefreshTokenSuccessResponseType>(
            `${BASE_URL}/api/refreshtoken`,
            {},
            {
              headers: {
                Refreshtoken: setRefreshToken(),
              },
            }
          );

          const accessToken = res.data.access_token;
          const refreshToken = res.data.refresh_token;

          // updating the new access and refresh token
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          originalConfig.headers.Authorization = `Bearer ${accessToken}`;

          return authHttpClient(originalConfig);
        } catch (_error) {
          // Logging out the user by removing all the tokens from local
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          // Redirecting the user to the landing page
          window.location.href = window.location.origin;
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default authHttpClient;
