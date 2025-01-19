import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { NotifyAttendanceComponent } from '../notify-attendance/notify-attendance.component';
@NgModule({
  declarations: [
    ScheduleComponent,
    NotifyAttendanceComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule
  ]
})
export class ScheduleModule { }
