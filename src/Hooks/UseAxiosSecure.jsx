import axios from "axios";
import ContextHook from "./ContextHook";
import toast from "react-hot-toast";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "https://service-provider-server-iota.vercel.app/",
});

const UseAxiosSecure = () => {
  const { loading, user, signOutUser } = ContextHook();

  useEffect(() => {
    // Add request interceptors
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (!loading && user?.accessToken) {
          config.headers.authorization = `Bearer ${user.accessToken}`;
        } else {
          delete config.headers.authorization; // Remove header if no token
        }
        return config;
      }
    );

    // Add response interceptors
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => {
              toast.error("unauthorized / forbidden access");
            })
            .catch((err) => {
              toast.error(err.message);
            });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [loading, signOutUser, user]);

  return axiosInstance;
};

export default UseAxiosSecure;
