import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'http://localhost:3001/teacher-dashboard';

  constructor(private http: HttpClient) {}

  getDashboard(teacherId: number): Observable<any> {
    console.log(`Calling API: ${this.apiUrl}`);
    return this.http.get(`${this.apiUrl}`);
  }
}
