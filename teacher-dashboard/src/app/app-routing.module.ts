import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeavesComponent } from './leaves/leaves.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { NotifyAttendanceComponent } from './notify-attendance/notify-attendance.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLandingComponent } from './student-landing/student-landing.component';
const routes: Routes = [
  {path:"working",component:LoginComponent},
  {path:"",component:LandingPageComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"schedule", component:ScheduleComponent},
  {path:"leaves",component:LeavesComponent},
  {path:"studentInfo",component:StudentInfoComponent},
  {path:"addStudent",component:AddNewStudentComponent},
  {path:"notifyAttendance",component:NotifyAttendanceComponent},
  {path:"student-dashboard",component:StudentDashboardComponent},
  {path:"student-landing",component:StudentLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
