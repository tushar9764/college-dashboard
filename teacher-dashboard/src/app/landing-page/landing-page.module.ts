import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';
import { StudentLandingComponent } from '../student-landing/student-landing.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    StudentLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LandingPageModule { }
