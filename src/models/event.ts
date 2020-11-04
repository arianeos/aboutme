export default class Event {
  id: number;
  title: string;
  description: string;
  icon: string;

  constructor(title: string, id: number, description: string, icon: string) {
    this.title = title;
    this.id = id;
    this.description = description;
    this.icon = icon;
  }
}
