// import { Component, OnInit } from '@angular/core';

// import { HttpService } from '../http.service'

// //interfaces
// import { Task } from '../interface/task'

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {


//   // tasks: object[]; see comment in deleteTask()
//   tasks: Task[];
//   taskTitle: string;
//   taskID: number;

//   constructor(private _http: HttpService) { }

//   ngOnInit() {
//     this._http.myMethod();
//     this.taskTitle = '';
//     this.taskID = 4;
//     this.tasks = [
//       {
//         id: 1,
//         title: 'Finish adding tasks',
//         completed: false,
//         editing: false,
//       },
//       {
//         id: 2,
//         title: 'Learn more advanced Angular',
//         completed: false,
//         editing: false,
//       },
//       {
//         id: 3,
//         title: 'Have fun',
//         completed: false,
//         editing: false,
//       }
//     ]
//   }

//   //void because this is not returning anything
//   addTask(): void {
//     //make sure not an empty string. trim removes empty space at the end then check the length to see if it's empty
//     if (this.taskTitle.trim().length === 0) {
//       return alert('No empty tasks');
//     }
//     this.tasks.push({
//       id: this.taskID,
//       title: this.taskTitle,
//       completed: false,
//       editing: false,
//     })
//     //after pushing to taskList, empty the input and increment the ID
//     this.taskTitle = '';
//     this.taskID++;
//   }

//   editTask(task: Task): void {
//     // console.log(task)
//     task.editing = !task.editing
//   }

//   deleteTask(id: number): void {
//     //because 'tasks' is an object[], we get a red squiggly under task.id
//     // we can fix this by changing it to an interface we define ourselves. 
//     //we can either do this in this file (see commented section at the end) but then we can't use it across our app
//     //to use it across our app, we can $ ng g interface file-name
//     this.tasks = this.tasks.filter(task => task.id !== id)
//     console.log('id:', id)
//   }

//   taskCount(): number {
//     return this.tasks.filter(task => !task.completed).length;
//     //take the array of tasks, and filter out the tasks that ARE completed (which means we get hot many need to be done still)
//     //then we take the length to give us how many tasks there are 
//   }

//   selectAll(): void {
//     // console.log('selectAll hit')
//     //for each task, set the task completed to match whater the select all check box is (checked or not)
//     this.tasks.forEach(task => task.completed = (<HTMLInputElement>event.target).checked)
//   }

// }

// // interface Task {
// //   id: number,
// //   title: string,
// //   completed: boolean,
// //   editing: boolean,
// // }