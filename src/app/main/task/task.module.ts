import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from 'src/app/main/task/tasks/tasks.component';
import { CompanyRoutes } from './task.routes';
import { EdittaskComponent } from './edittask/edittask.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TasksComponent,
    EdittaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutes,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TaskModule { }
