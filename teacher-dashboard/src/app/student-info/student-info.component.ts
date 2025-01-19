import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { StudentInfo } from '../models/student-info';
import { StudentInfoService } from '../services/student-info.service';
@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
 export class StudentInfoComponent implements OnInit{
  allStudentInfo:StudentInfo[]=[];

constructor(private StudentInfoService:StudentInfoService){

}

ngOnInit(): void {
  this.StudentInfoService.getAllStudents().subscribe((data: StudentInfo[]) => {
    this.allStudentInfo = data;
    console.log(`data data data:${this.allStudentInfo}`);
  });
}
searchId: string = '';
filteredStudents() {
  if (!this.searchId) {
    return this.allStudentInfo; // Return all students if no search input
  }
  return this.allStudentInfo.filter(student =>
    student.id.toLowerCase().includes(this.searchId.toLowerCase()) ||
    student.name.toLowerCase().includes(this.searchId.toLowerCase()) ||
    student.branch.toLowerCase().includes(this.searchId.toLowerCase()) ||
    student.latest_cpi.toString()==(this.searchId) ||
    student.phone.toLowerCase().includes(this.searchId.toLowerCase())
  );
}

 
 

}
