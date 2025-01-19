import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './leaves.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LeavesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule 
    
  ]
})
export class LeavesModule { }
