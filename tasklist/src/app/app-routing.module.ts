import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [

  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'list', component: ListComponent},
  { path: 'edit/:id', component: EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
