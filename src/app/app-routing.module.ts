import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { EmoloyeeListComponent} from './component/emoloyee-list/emoloyee-list.component';
import {AddEmployeeComponent } from './component/add-employee/add-employee.component'
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';



const routes: Routes = [
  {path:'', redirectTo : "login", pathMatch:"full"},
  {path :'login' , component : LoginComponent},
  { path : 'signup' , component: SingupComponent},
  // { path: 'dashborad', component: EmoployeeDashboardComponent},
  { path :'employee-list', component : EmoloyeeListComponent},
  { path :'add-employee', component : AddEmployeeComponent},
  { path : 'edit-employee/:id', component: EmployeeDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
