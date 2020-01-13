import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;
  @Output() onCreate = new EventEmitter()
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.taskForm = this.fb.group({
      name: ['', [Validators.minLength(3)]],
      description: ['', [Validators.minLength(3)]]})
  }


  submitTask(){
    if(this.taskForm.valid){
      this.onCreate.emit(this.taskForm.value)
    }
  }

}
