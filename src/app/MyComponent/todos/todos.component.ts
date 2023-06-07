import { Component, OnInit } from "@angular/core";
import { ToDo } from "src/app/todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  localItem: string;
  todo: ToDo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todo = [];
    } else {
      this.todo = JSON.parse(this.localItem);
    }
  }

  ngOnInit() {}

  deleteToDo(todo: ToDo) {
    console.log(todo);
    const index = this.todo.indexOf(todo);
    this.todo.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todo));
  }

  toDoAdd(todo: ToDo) {
    console.log(todo);
    this.todo.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todo));
  }
}
