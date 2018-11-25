import { Injectable } from '@angular/core';
import {ToDoItem} from '../to-do-item/to-do-item';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemsService {

  toDoList: ToDoItem[] = [];
  toDoListChanged: Subject<ToDoItem[]> = new Subject<ToDoItem[]>();
  lastToDoItemId = 0;

  constructor() {
    this.lastToDoItemId++;
    this.toDoList.push(new ToDoItem(this.lastToDoItemId, 'Homework', false, new Date()));
    this.lastToDoItemId++;
    this.toDoList.push(new ToDoItem(this.lastToDoItemId, 'Business', true, new Date()));
    this.lastToDoItemId++;
    this.toDoList.push(new ToDoItem(this.lastToDoItemId, 'Hangout with friends and family', false, new Date(new Date().setMonth(5))));
  }

  public addItem(item: string, itemDate: Date) {
    this.lastToDoItemId++;
    this.toDoList.push(new ToDoItem(this.lastToDoItemId, item, false, itemDate));
    this.toDoListChanged.next(this.toDoList);
  }

  public removeItem(id: number) {
    const elementToRemove = this.toDoList.filter(i => i.id === id)[0];
    const index = this.toDoList.indexOf(elementToRemove);
    this.toDoList.splice(index, 1);
    this.toDoListChanged.next(this.toDoList);
  }

  public updateItem(id: number, done: boolean) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id === id) {
        this.toDoList[i].done = done;
      }
    }
  }
}
