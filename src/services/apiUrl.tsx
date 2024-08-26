import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api-test-web.agiletech.vn",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          throw new Error("No refreshToken available");
        }

        const { data } = await instance.post("/auth/refresh-token", {
          refreshToken,
        });

        if (!data || !data.accessToken) {
          throw new Error("Failed to refresh accessToken");
        }

        localStorage.setItem("accessToken", data.accessToken);
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.accessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;

        return instance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
      }
    }

    return Promise.reject(error);
  }
);
