import { Component } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any;

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    const teacherId = 1; // Example teacher ID
    this.teacherService.getDashboard(teacherId).subscribe(data => {
      this.dashboardData = data;
    });
  }

}
