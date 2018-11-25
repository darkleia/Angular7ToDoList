import {Component, Input, OnInit} from '@angular/core';
import { ToDoItem } from '../to-do-item/to-do-item';

@Component({
  selector: 'app-to-do-items-list',
  templateUrl: './to-do-items-list.component.html',
  styleUrls: ['./to-do-items-list.component.css']
})
export class ToDoItemsListComponent implements OnInit {

  @Input() toDoList: ToDoItem[] = [];
  @Input() listName = '';
  @Input() listDescription = '';
  @Input() imgUrl = '';
  @Input() showDatePicker = false;

  showAddItemForm = false;
  showAddItemBtn = true;

  constructor() {}

  ngOnInit() {}

  openAddItemForm(): void {
    this.showAddItemForm = true;
    this.showAddItemBtn = false;
  }

  hideAddItemForm(): void {
    this.showAddItemForm = false;
    this.showAddItemBtn = true;
  }
}

