import axios from "axios";
import { configuration } from "./Api";
import { SuccessDto } from "../types/Types";

const interceptor = axios.create(configuration);

axios.interceptors.request.use(async config => {
  // console.log("Request enviada");
  const response = (await interceptor.get<SuccessDto>("refresh-token")).data;
  config.headers.Authorization = response.AccessToken;
  return config;
}, error => Promise.reject(error));

export default axios;