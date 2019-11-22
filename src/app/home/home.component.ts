import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service'

//interfaces
import { Task } from '../interface/task'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCount: number;
  // tasks: object[]; see comment in deleteTask()
  tasks: Task[];
  taskTitle: string;
  taskID: number;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.myMethod();
    this.clickCount = 0;
    this.taskTitle = '';
    this.taskID = 4;
    this.tasks = [
      {
        id: 1,
        title: 'Finish adding tasks',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Learn more advanced Angular',
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: 'Have fun',
        completed: false,
        editing: false,
      }
    ]
  }

  countClick() {
    this.clickCount++
  }

  setClass() {
    let myClass = {
      notActive: this.clickCount < 5,
      five: this.clickCount > 4 && this.clickCount < 10,
      ten: this.clickCount > 9 && this.clickCount < 25,
      twentyFive: this.clickCount > 24 && this.clickCount < 50,
      fifty: this.clickCount > 49 && this.clickCount < 100,
      hundred: this.clickCount > 99,
    }
    return myClass;
  }

  //void because this is not returning anything
  addTask(): void {
    //make sure not an empty string. trim removes empty space at the end then check the length to see if it's empty
    if (this.taskTitle.trim().length === 0) {
      return alert('No empty tasks');
    }
    this.tasks.push({
      id: this.taskID,
      title: this.taskTitle,
      completed: false,
      editing: false,
    })
    //after pushing to taskList, empty the input and increment the ID
    this.taskTitle = '';
    this.taskID++;
  }

  editTask(task: Task): void {
    console.log(task)
    task.editing = !task.editing
  }

  deleteTask(id: number): void {
    //because 'tasks' is an object[], we get a red squiggly under task.id
    // we can fix this by changing it to an interface we define ourselves. 
    //we can either do this in this file (see commented section at the end) but then we can't use it across our app
    //to use it across our app, we can $ ng g interface file-name
    this.tasks = this.tasks.filter(task => task.id !== id)
    console.log('id:', id)
  }

}

// interface Task {
//   id: number,
//   title: string,
//   completed: boolean,
//   editing: boolean,
// }