import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LandingPageService } from '../services/landing-page.service';
import { LandingPageModule } from './landing-page.module';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  quotes: any[] = []; // Ensure it's initialized as an empty array
  quote = '';
  author='';
  quoteLen = 0;
  isLoading: boolean = true;
  constructor(private landingPageService: LandingPageService) {}

  ngOnInit() {
    this.getQuotess();
    this.showSpinnerForFixedTime();
  }

  getQuotess(): void {
    console.log('Fetching quotes');
    this.landingPageService.getQuotes().subscribe({
      next: (data: any[]) => {
        console.log('Quotes fetched:', data);
        this.quotes = data;
        this.quoteLen = this.quotes.length; // Update length after quotes are fetched
        if (this.quoteLen > 0) {
          const randomIndex = Math.floor(Math.random() * this.quoteLen);
          this.quote = this.quotes[randomIndex].Quote;
          this.author=this.quotes[randomIndex].By;
        }
      },
      error: (err) => {
        console.error('Error fetching quotes:', err);
        alert('Failed to fetch quotes. Please try again.');
      },
    });
    
  }
  showSpinnerForFixedTime() {
    setTimeout(() => {
      this.isLoading = false; // Hide spinner after 1.5 seconds
    }, 1000);
  }
  
}

