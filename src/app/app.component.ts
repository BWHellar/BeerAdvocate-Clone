import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  tasks: Task[] = [
    new Task('First Task', 3),
    new Task('Second Task', 2),
    new Task('Third Task', 2)
  ];
  // selectedTask: Task = this.tasks[0];

  editTask(clickedTask)  {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask=null;
  }
  priorityColor(currentTask)  {
    if (currentTask.priority === 3) {
      return "bg-danger";
    }else if (currentTask.priority === 2) {
      return "bg-warning";
    }else {
      return "bg-info";
    }
  }
}
