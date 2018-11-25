import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoItemsService} from '../services/to-do-items.service';

@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css']
})
export class AddToDoItemComponent implements OnInit {

  @Output() toDoItemAdded: EventEmitter<number> = new EventEmitter();
  @Input() showDatePicker = false;

  newToDoItem = '';
  newToDoItemDate: Date;

  constructor(private toDoItemsService: ToDoItemsService) { }

  ngOnInit() {}

  addNewToDoItem(): void {
    if (this.newToDoItem) {
      this.toDoItemsService.addItem(this.newToDoItem, this.newToDoItemDate ? this.newToDoItemDate : new Date());
      this.newToDoItem = '';
      this.newToDoItemDate = undefined;
      this.toDoItemAdded.emit();
    }
  }
}
