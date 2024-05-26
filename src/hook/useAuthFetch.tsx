"use client";

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

interface RefreshTokenSuccessResponseType {
  token_type: string;
  expires_in: string;
  access_token: string;
  refresh_token: string;
  status: number;
  message: string;
}

const useAuthFetch = () => {
  // Returns Bearer Token; also solve the srr issues that localstorage is not defined
  const setBearerToken = () => {
    let accessToken = "";
    if (typeof window !== undefined) {
      accessToken = localStorage.getItem("accessToken") as string;
    }
    return `Bearer ${accessToken}`;
  };

  const setRefreshToken = () => {
    let refreshToken = "";

    if (typeof window !== undefined) {
      refreshToken = localStorage.getItem("refreshToken") as string;
    }
    return refreshToken;
  };

  // base auth client instance
  const authHttpClient = axios.create({
    baseURL: "https://sifaris.ktmserver.com/backend",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: setBearerToken(),
    },
  });

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
              "https://sifaris.ktmserver.com/backend/api/refreshtoken",
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

  return authHttpClient;
};

export default useAuthFetch;
