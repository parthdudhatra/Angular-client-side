import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EmoployeeDashboardComponent } from './emoployee-dashboard/emoployee-dashboard.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EmoloyeeListComponent } from './component/emoloyee-list/emoloyee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    // EmoployeeDashboardComponent,
    SingupComponent,
    LoginComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent,
    EmoloyeeListComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
