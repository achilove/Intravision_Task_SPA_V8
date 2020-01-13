import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sideBarElems = [
    {
      path: 'knowledge', text: "База знаний"
    },
    {
      path: 'tasks', text: "Заявки"
    },
    {
      path: 'employees', text: "Сотрудники"
    },
    {
      path: 'customers', text: "Клиенты"
    },
    {
      path: 'actives', text: "Активы"
    },
    {
      path: 'options', text: "Настройки"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
