import { Injectable } from '@angular/core';
import { StudentInfo } from '../models/student-info';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  
  private apiUrl='http://localhost:3001/studentInfo'
  constructor(private http: HttpClient) { 
    
  }

  getAllStudents(): Observable<StudentInfo[]> {
    console.log(`Calling API: ${this.apiUrl}`);
    return this.http.get<StudentInfo[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching leaves:', error);
        throw error;  
      })
    );
  }
}
