import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo
  @Output() toDoDelete: EventEmitter<ToDo> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onClick(todo: ToDo) {
    this.toDoDelete.emit(todo)
    console.log("this delete button has been clicked.")
  }

}
