// import env from "react-native-dotenv";
// import { API_URL } from "@react-native-dotenv";
import axios from "axios";
// import { configDotenv } from "dotenv";
// import react-native-doten
// const env = configDotenv();
// import { API_URL } from "react-native-dotenv";
const API_URL = "http://10.0.0.26:8000/";
export default class Manager {
  static get(model_url, parameters, token = null) {
    const headers = {};
    if (token) {
      headers["Authorization"] = "Token " + token;
    }
    return axios.get(API_URL + model_url, {
      params: parameters,
      headers: headers,
    });
  }
  static post(model_url, body) {
    return axios.post(API_URL + model_url, body);
  }
}
