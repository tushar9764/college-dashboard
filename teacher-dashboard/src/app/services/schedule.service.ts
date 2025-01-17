import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MatButton } from '@angular/material/button';

export interface Schedule {

  id: number;
  teacherId: number;
  attendance:number;
  teacherName:string;
  className: string;
  classTime: string;
  status: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseUrl = 'http://localhost:3001/schedules/1';

  constructor(private http: HttpClient) {}

  // Fetch schedules for a specific teacher
  getSchedulesByTeacherId(teacherId: number): Observable<any> {
    console.log(`Calling API: ${this.baseUrl}`);
    return this.http.get<any>(`${this.baseUrl}`);
  }

  // Update a specific schedule
  

}
