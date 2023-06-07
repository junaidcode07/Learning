import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ToDo } from 'src/app/todo';

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"],
})
export class AddTodoComponent implements OnInit {
  title: string;
  description: string;
  @Output() toDoAdd: EventEmitter<ToDo> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const todo = {
      serialNumber: 8,
      title: this.title,
      description: this.description,
      active: true,
    };

    this.toDoAdd.emit(todo);
  }
}
