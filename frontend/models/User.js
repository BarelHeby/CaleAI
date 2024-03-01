import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import Manager from "../services/manager";
import Storage from "./storage";
export default class User {
  constructor(username, email, image, id = null) {
    this.username = username;
    this.email = email;
    this.image = image;
    this.id = id;
  }
  static async login(username, password) {
    return Manager.post("users/login/", {
      username: username,
      password: password,
    })
      .then((resp) => {
        const data = resp.data;
        const u = new User(data.username, data.email, data.image, data.id);
        Storage.storeData("user", JSON.stringify(u));
        return u;
      })
      .catch((error) => {
        return null;
      });
  }
  static async logout() {
    try {
      return await Storage.removeData("user");
    } catch (error) {}
  }
  static async getUser() {
    const u = await Storage.getData("user");
    if (u) {
      return new User(u.username, u.email, u.image, u.id);
    }
    return null;
  }
}
