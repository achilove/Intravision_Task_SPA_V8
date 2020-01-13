import { Routes, RouterModule } from "@angular/router";
import { TasksComponent } from './tasks/tasks.component';
import { OptionsComponent } from '../options/options.component';
import { KnowledgebaseComponent } from '../knowledgebase/knowledgebase.component';
import { EmployeesComponent } from '../employees/employees.component';
import { ClientsComponent } from '../clients/clients.component';
import { ActivesComponent } from '../actives/actives.component';

const routes: Routes = [
    { path: 'tasks', component: TasksComponent},
    { path: 'actives', component: ActivesComponent},
    { path: 'customers', component: ClientsComponent},
    { path: 'employees', component: EmployeesComponent},
    { path: 'knowledge', component: KnowledgebaseComponent},
    { path: 'options', component: OptionsComponent},
]

export const CompanyRoutes = RouterModule.forChild(routes);