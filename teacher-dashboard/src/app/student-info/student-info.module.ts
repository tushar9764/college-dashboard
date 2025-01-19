import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoComponent } from './student-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddNewStudentComponent } from '../add-new-student/add-new-student.component';

@NgModule({
  declarations: [
    StudentInfoComponent,
    AddNewStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class StudentInfoModule { }
