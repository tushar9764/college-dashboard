import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../services/leaves.service';  // Import the service
import { Leaves } from '../models/leaves';  // Import the model
import { Observable } from 'rxjs';  // Import Observable

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leaves: Leaves[] = [];

  constructor(private leaveService: LeavesService) {}

  ngOnInit(): void {
    this.leaveService.getLeaves().subscribe((data: Leaves[]) => {
      this.leaves = data;
      console.log(`data data data:${this.leaves}`);
    });
  }
  deleteLeave(id: number): void {
    this.leaveService.deleteLeave(id).subscribe(() => {
      console.log(`Deleted leave with id: ${id}`);
      // Update local data by filtering out the deleted item
      this.leaves = this.leaves.filter((leave: any) => leave.id !== id);
    });
  }
  

}
