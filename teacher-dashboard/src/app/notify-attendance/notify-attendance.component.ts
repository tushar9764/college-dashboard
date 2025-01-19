import { Component } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { OnInit } from '@angular/core';
import { Schedule } from '../services/schedule.service';



@Component({
  selector: 'app-notify-attendance',
  templateUrl: './notify-attendance.component.html',
  styleUrls: ['./notify-attendance.component.css']
})
export class NotifyAttendanceComponent implements OnInit {
  teacherId: number | null = null;  // Initialize as null
  schedules: Schedule[] = [];
  teacher: Schedule | null = null;


  constructor(private scheduleService: ScheduleService) {}  // Inject the service

  ngOnInit(): void {
    // Ensure the service is properly initialized
    if (this.scheduleService.teacherId !== null && this.scheduleService.teacherId !== undefined) {
      this.teacherId = this.scheduleService.teacherId;  // Assign from service
    } else {
      console.error('teacherId is not set in ScheduleService.');
      this.teacherId = 0;  // Fallback value or handle accordingly
    }

    // Ensure teacherId is a valid number before passing it to the service
    if (this.teacherId !== null && this.teacherId !== undefined) {
      this.loadSchedules();  // Call loadSchedules after setting teacherId
    } else {
      console.error('Invalid teacherId: Cannot load schedules.');
    }
  }

  loadSchedules(): void {
    console.log('Fetching schedules for teacherId:', this.teacherId);
    // Pass only valid number to the service
    if (this.teacherId !== null && this.teacherId !== undefined) {
      this.scheduleService.getSchedulesByTeacherId(this.teacherId).subscribe({
        next: (data) => {
          console.log('Schedules fetched:', data);
          this.schedules = data;
          this.teacher = this.schedules.find((it) => it.teacherId === this.teacherId) || null;

        },
        error: (err) => {
          console.error('Error fetching schedules:', err);
          alert('Failed to fetch schedules. Please try again.');
        },
      });
    } else {
      console.error('teacherId is invalid.');
    }
  }
//this.leaves = this.leaves.filter((leave: any) => true);

  
}
