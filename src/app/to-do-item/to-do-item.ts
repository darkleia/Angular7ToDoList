export class ToDoItem {

  constructor(public id: number, public text: string, public done: boolean, public dateCreated: Date) {
    this.id = id;
    this.text = text;
    this.done = done;
    this.dateCreated = dateCreated !== undefined ? dateCreated : new Date();
  }
}
