import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { EdittaskComponent } from '../edittask/edittask.component';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @ViewChild(EdittaskComponent, {static:true})
  @ViewChild(CreateTaskComponent, {static:true})
  private editTaskComponent: EdittaskComponent
  private createTaskComponent: CreateTaskComponent
  tasks: Observable<any[]>
  showEdit: boolean = false
  showCreate: boolean = false
  selectedTask
  statuses:any[]
  priorities:any[]
  constructor(
    private taskService: TaskService
  ) { }
  ngOnInit() {
    this.getAllTasks()
    this.getHelpers()
  }


  getHelpers(){
    this.taskService.getStatuses().subscribe(statuses => this.statuses = statuses)
    this.taskService.getPriorities().subscribe(priorities => this.priorities = priorities)
  }

  getAllTasks(){
    this.tasks = this.taskService.getTasks()
  }

  editTask(task){
    this.selectedTask = Object.assign({}, task)
    this.showEdit = true
    this.showCreate = false
    // this.editTaskComponent.setChild({task, statuses: this.statuses, priorities: this.priorities})
  }

  createTask(){
    this.showEdit = false
    this.showCreate = true
  }

  postTask(task){
    console.log(task)
    this.taskService.saveTask(task).subscribe(taskId =>{
      console.log(taskId)
      this.taskService.getTask(taskId).subscribe(savedTask =>{
        console.log(savedTask)
        this.selectedTask = savedTask
        this.showCreate = false
        this.showEdit = true
      })
    })
  }
  
  putTask(task){
    this.taskService.putTask(task).subscribe(data =>{
      this.showEdit = false
      this.getAllTasks()
    })
  }

  closeChild(event){
    if(event){
      this.showCreate = false
      this.showEdit = false
    }
  }
}
