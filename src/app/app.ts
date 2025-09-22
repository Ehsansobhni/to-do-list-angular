import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [FormsModule],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("to-do-list-angular");
  task = "";
  taskList: { id: number; name: string }[] = [];

  addTask() {
    let newId = 1;
    if (this.taskList.length > 0) {
      const lastTask = this.taskList[this.taskList.length - 1];
      console.log(lastTask);
      newId = lastTask.id + 1;
    }
    this.taskList.push({ id: newId, name: this.task });
    // this.taskList.push({ id: this.taskList.length + 1, name: this.task });
    this.task = "";
    // console.log(this.taskList);
  }
  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id !== id);
    console.log(this.taskList);
  }
}
