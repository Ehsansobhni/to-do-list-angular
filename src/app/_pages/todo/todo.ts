import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./todo.html",
  styleUrls: ["./todo.css"],
})
export class Todo {
  task: string = "";
  taskList: { id: number; name: string; completed: boolean }[] = [];

  addTask() {
    const trimmedTask = this.task.trim();
    if (!trimmedTask) return;

    const newId =
      this.taskList.length > 0
        ? this.taskList[this.taskList.length - 1].id + 1
        : 1;

    this.taskList.push({ id: newId, name: trimmedTask, completed: false });
    this.task = "";
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((task) => task.id !== id);
  }
}
