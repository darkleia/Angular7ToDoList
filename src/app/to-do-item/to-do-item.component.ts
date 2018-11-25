import { Component, OnInit, Input } from '@angular/core';
import {ToDoItemsService} from '../services/to-do-items.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() public toDoItemText = '';
  @Input() public done = false;
  @Input() public dateCreated = new Date();
  @Input() public id = 0;

  constructor(private toDoItemsService: ToDoItemsService) { }

  ngOnInit() {}

  statusChanged(id: number) {
    this.done = !this.done;
    this.toDoItemsService.updateItem(id, this.done);
    console.log(id);
  }

  removeItem(id: number) {
    this.toDoItemsService.removeItem(id);
    console.log('removed ' + id);
  }
}
