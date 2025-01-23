import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';


@NgModule({
  declarations: [
    LoginComponent,
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule {
  

  

 }
