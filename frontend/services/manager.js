// import env from "react-native-dotenv";
// import { API_URL } from "@react-native-dotenv";
import axios from "axios";
// import { configDotenv } from "dotenv";
// import react-native-doten
// const env = configDotenv();
// import { API_URL } from "react-native-dotenv";
const API_URL = "http://10.0.0.28:8000/";
export default class Manager {
  static get(model_url, parameters) {
    return axios.get(API_URL + model_url, {
      params: parameters,
    });
  }
  static post(model_url, body) {
    return axios.post(API_URL + model_url, body);
  }
}
