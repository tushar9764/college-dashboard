import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // Fetch student by ID
  fetchStudentById(id: string): Observable<any> {
    const url = `http://localhost:3001/students`; // Mockoon students endpoint
    return this.http.get<any>(url);
  }

  
}
