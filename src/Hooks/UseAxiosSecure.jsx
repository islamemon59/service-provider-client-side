import axios from "axios";
import ContextHook from "./ContextHook";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

const UseAxiosSecure = () => {
  const { user, signOutUser } = ContextHook();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
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

  return axiosInstance;
};

export default UseAxiosSecure;
