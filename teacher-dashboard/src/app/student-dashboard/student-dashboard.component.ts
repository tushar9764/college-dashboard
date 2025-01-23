// student-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  id: string | null = null;
  studentName: string | null = null;
  studentCpi: number | null = null;
  studentDepartment: string | null = null;
  studentAttendance: number | null = null;
  studentCourses: string[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Extract the id from the query parameters
    this.route.queryParams.subscribe(params => {
      this.id = params['id']; // Access the 'id' query parameter
      console.log('ID:', this.id);

      if (this.id) {
        this.fetchStudentDetails(this.id);
      }
    });
  }

  // Fetch student details from the API
  fetchStudentDetails(id: string): void {
    const apiUrl = `http://localhost:3001/students`;

    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        const students = response.students;
        const student = students.find((s: any) => s.id === id);

        if (student) {
          this.studentName = student.name;
          this.studentCpi = student.cpi;
          this.studentDepartment = student.department;
          this.studentAttendance = student.attendance;
          this.studentCourses = student.courses;
          console.log('Student found:', student);
        } else {
          console.error('Student not found with ID:', id);
        }
      },
      error: (error) => {
        console.error('Error fetching student data:', error);
      }
    });
  }
}
