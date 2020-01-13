import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskModule } from './main/task/task.module';
import { ClientsComponent } from './main/clients/clients.component';
import { ActivesComponent } from './main/actives/actives.component';
import { OptionsComponent } from './main/options/options.component';
import { EmployeesComponent } from './main/employees/employees.component';
import { KnowledgebaseComponent } from './main/knowledgebase/knowledgebase.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ClientsComponent,
    ActivesComponent,
    OptionsComponent,
    EmployeesComponent,
    KnowledgebaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
