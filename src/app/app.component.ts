import { Component } from '@angular/core';
import { ToDoItemsService } from './services/to-do-items.service';
import {ToDoItem} from './to-do-item/to-do-item';
import {Subscription} from 'rxjs';
import {TodayToDoPipe} from './pipes/today-to-do.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allTasksBoardName = 'All Tasks';
  allTasksBoardDescription = 'See All The Tasks You\'ve Created';
  todayTasksBoardName = 'Today Tasks';
  todayTasksBoardDescription = 'See All The Tasks You\'ve Created Today';
  public toDoList: ToDoItem[] = [];
  public todayToDoList: ToDoItem[] = [];
  private _subscription: Subscription;
  private _todayToDoPipe: TodayToDoPipe = new TodayToDoPipe();

  constructor(private toDoService: ToDoItemsService) {
    this.toDoList = toDoService.toDoList;
    this.todayToDoList = this._todayToDoPipe.transform(this.toDoList);
    this._subscription = toDoService.toDoListChanged.subscribe((value) => {
      this.todayToDoList = this._todayToDoPipe.transform(this.toDoList);
    });
  }
}
