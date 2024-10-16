import Manager from "../services/manager";
export default class Task {

  static async createTasks(tasks){
    const url = "task/"
    const body = {
      tasks: tasks
    } 
    return await Manager.post(url, body)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        return null;
      });
  }

}
