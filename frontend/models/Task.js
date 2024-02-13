export default class Task {
  constructor(date, name, category, description, startTime, endTime, icon) {
    this.date = date;
    this.name = name;
    this.category = category;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.icon = icon;
  }
}
