import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoComponent } from './student-info.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentInfoModule { }
