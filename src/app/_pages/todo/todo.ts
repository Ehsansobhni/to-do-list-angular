// _pages/todo/todo.ts
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TodoService } from "../../_services/todo.service";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./todo.html",
  styleUrls: ["./todo.css"],
})
export class TodoComponent implements OnInit {
  tasks: any[] = [];
  taskName = "";

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.todoService.getTodo().subscribe((data) => (this.tasks = data));
  }

  addTask() {
    if (!this.taskName.trim()) return;

    this.todoService
      .addTodo({ name: this.taskName, completed: false })
      .subscribe(() => {
        this.taskName = "";
        this.loadTasks();
      });
  }

  deleteTask(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => this.loadTasks());
  }

  toggleTask(task: any) {
    this.todoService
      .updateTodo(task.id, { completed: !task.completed })
      .subscribe(() => this.loadTasks());
  }
}
