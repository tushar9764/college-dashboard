import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Leaves } from '../models/leaves';  // Assuming you have a Leaves model

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  private apiUrl = 'http://localhost:3001/leaves';

  constructor(private http: HttpClient) {}

  getLeaves(): Observable<Leaves[]> {
    console.log(`Calling API: ${this.apiUrl}`);
    return this.http.get<Leaves[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching leaves:', error);
        throw error;  // You can replace this with a default fallback value if needed
      })
    );
  }

  deleteLeave(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  
  
  
  
}
