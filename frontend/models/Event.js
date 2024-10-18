import Manager from "../services/manager";


export default class Event {

    constructor(
      task,
      from_time,
      to_time,
      is_constant,
      date
    ) {
        this.task = task;
        this.from_time = from_time;
        this.to_time = to_time;
        this.is_constant = is_constant;
        this.date = date;
    }

  static async getEvents(date){
    const url = "event/"
    const headers = {
      "date" : date
    } 
    console.log("headers", headers)
    return await Manager.get(url, headers)
      .then((resp) => {
        return resp.data.map(event => Event.from_json(event));
      })
      .catch((error) => {
        return [];
      });
  }

static from_json(event) {
    console.log("event", event.task_id)
    return new Event(
      event.task_id,
      event.from_time,
      event.to_time,
      event.is_constant,
      event.date
    );
    
}

}

