import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  private baseUrl = 'http://localhost:3001/landing-page';
  constructor(private http: HttpClient) { }

  // Fetch quotes 
  getQuotes(): Observable<any> {
    console.log(`Calling API: ${this.baseUrl}`);
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
