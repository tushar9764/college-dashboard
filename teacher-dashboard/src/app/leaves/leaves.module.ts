import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './leaves.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@NgModule({
  declarations: [
    LeavesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule  // Add HttpClientModule to make HTTP requests
  ]
})
export class LeavesModule { }
