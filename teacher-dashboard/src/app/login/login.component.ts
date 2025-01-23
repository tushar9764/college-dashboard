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
        const user = response.users.find(
          (u: any) => u.email === this.email && u.password === this.password
        );

        if (user) {
          console.log('User logged in with ID:', user.id); // Debug log

          // Fetch student data using ID
          this.loginService.fetchStudentById(user.id).subscribe({
            next: (studentData) => {
              console.log('Student data fetched:', studentData); // Debug log
              this.router.navigate(['student-dashboard'], {
                queryParams: { id: user.id },
              });
            },
            error: (error) => {
              console.error('Error fetching student data:', error);
            },
          });
        } else {
          console.log('Invalid credentials'); // Debug log
          this.loginError = true; // Show login error
        }
      },
      error: (err) => {
        console.error('Error fetching users:', err); // Debug log
      },
    });
  }
}
