import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeavesComponent } from './leaves/leaves.component';
const routes: Routes = [
  {path:"",component:LandingPageComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"schedule", component:ScheduleComponent},
  {path:"leaves",component:LeavesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
