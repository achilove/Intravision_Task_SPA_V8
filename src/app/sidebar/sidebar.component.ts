import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sideBarElems = [
    {
      path: 'knowledge', text: "База знаний", icon: 'fa fa-book'
    },
    {
      path: 'tasks', text: "Заявки", icon: 'fa fa-file-text-o'
    },
    {
      path: 'employees', text: "Сотрудники", icon: 'fa fa-users'
    },
    {
      path: 'customers', text: "Клиенты", icon: 'fa fa-building-o'
    },
    {
      path: 'actives', text: "Активы", icon: 'fa fa-desktop'
    },
    {
      path: 'options', text: "Настройки", icon: 'fa fa-cog' 
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
