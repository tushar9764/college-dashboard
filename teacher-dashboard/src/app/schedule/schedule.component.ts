import { Component, OnInit } from '@angular/core';
import { ScheduleService,Schedule } from '../services/schedule.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedules: any;
  teacherId = 1; // Example teacher ID
  editingSchedule: Schedule | null = null;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.loadSchedules();
  }

  // Load schedules for the teacher
  loadSchedules(): void {
    console.log('Fetching schedules for teacherId:', this.teacherId);
    this.scheduleService.getSchedulesByTeacherId(this.teacherId).subscribe({
      next: (data) => {
        console.log('Schedules fetched:', data);
        this.schedules = data;
      },
      error: (err) => {
        console.error('Error fetching schedules:', err);
        alert('Failed to fetch schedules. Please try again.');
      },
    });
  }

  alertTeacher(id:number){
    this.scheduleService.teacherId=id;
    

  }
//scghedules are now available in schedules
  // Enable editing mode for a schedule


  // Cancel editing
  
}

