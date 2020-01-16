import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.scss']
})
export class EdittaskComponent implements AfterViewInit {
  @Input() task: any
  @Input() statuses: any[]
  @Input() priorities: any
  @Output() onEdit = new EventEmitter()
  @Output() onClose = new EventEmitter()

  users: User[]
  showUsers:boolean = false
  showPriorities:boolean = false
  showStatuses:boolean = false
  showTags:boolean = false
  tags: any[] = []
  taskForm: FormGroup;
  comment
  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
  ) { }
  ngAfterViewInit() {
    this.getUsers()

    this.taskForm = this.fb.group({
      comment: ['', [Validators.minLength(3)]],
    })

    this.taskForm.get('comment').valueChanges.subscribe(comment =>{
        this.comment = comment
    })
  }

  setChild({task, statuses, priorities}){
    this.task = task
    this.statuses = statuses
    this.priorities = priorities
  }

  getUsers(){
    this.taskService.getUsers().subscribe((users: User[]) =>{
      this.users = users
    })
  }

  selectExecutor(user:User){
    this.task.executorId = user.id
    this.task.executorName = user.name
    this.showUsers = false
  }

  selectPriority(priority){
    this.task.priorityId = priority.id
    this.task.priorityName = priority.name
    this.showPriorities = false
  }

  selectStatus(status){
    this.task.statusId = status.id
    this.task.statusName = status.name
    this.task.statusRgb = status.rgb
    this.showStatuses = false
  }

  submitTask(){
    if(this.task){
      if(this.comment){
        if(this.task['lifetimeItems'] && Array.isArray(this.task['lifetimeItems'])){
          this.task['lifetimeItems'].push({comment: this.comment})
        }else{
          this.task['lifetimeItems'] = [{comment: this.comment}]
        }
      }
      this.onEdit.emit(this.task)
    }
  }

  close(){
    this.onClose.emit(true)
  }

  addTag(tag){
    this.task.tags.push(tag)
    this.tags.splice(this.tags.indexOf(tag), 1)
  }

  enableTags(){
      this.tags = []
      this.taskService.getTags().subscribe(tags => {
        for(let taskTag of this.task.tags){
          for(let i=0; i<tags.length; i++){
            if(tags[i].id === taskTag.id){
              tags.splice(i, 1)
              break
            }
          }
        }
        this.tags = tags
      })
  }

  deleteTag(tag){
    this.task.tags.splice(this.tags.indexOf(tag), 1)
    this.tags.unshift(tag)
  }




}
