import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = ''; // User's email
  password: string = ''; // User's password
  loginError: boolean = false; // Tracks login errors

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) {}

  // Handle login and fetch student data
  onLogin() {
    const url = 'http://localhost:3001/users'; // Mockoon users endpoint
  
    this.http.get<any>(url).subscribe({
      next: (response) => {
        // Find the user based on email and password
        const user = response.users.find(
          (u: any) => u.email === this.email && u.password === this.password
        );
  
        if (user) {
          const userType = user.Type; // Extract Type directly from the user object
  
          if (userType === "student") {
            console.log('Student logged in with ID:', user.id);
  
            // Fetch student data using ID
            this.loginService.fetchStudentById(user.id).subscribe({
              next: (studentData) => {
                console.log('Student data fetched:', studentData);
                this.router.navigate(['student-dashboard'], {
                  queryParams: { id: user.id },
                });
              },
              error: (err) => {
                console.error('Error fetching student data:', err);
              },
            });
          } else if (userType === "hod") {
            console.log('HOD logged in with ID:', user.id);
  
            // Navigate to HOD dashboard
            this.router.navigate(['hodLanding'], {
              queryParams: { id: user.id },
            });
          } else {
            console.error('Unknown user type:', userType);
          }
        } else {
          console.error('Invalid email or password');
        }
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }
  
}
