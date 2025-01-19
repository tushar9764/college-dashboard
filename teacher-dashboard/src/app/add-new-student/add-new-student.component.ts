import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent {
  newStudent = {
    id: '',
    name: '',
    class: '',
    branch: '',
    latest_cpi: 0,
    email: '',
    phone: '',
    address: {
      city: '',
      state: '',
      country: ''
    }
  };

  addStudent() {
    console.log('New student added:', this.newStudent);

    // Send the data to the backend (replace with actual service call)
    fetch('http://localhost:3001/studentInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.newStudent)
    })
      .then(response => response.json())
      .then(data => console.log('Student successfully added:', data))
      .catch(error => console.error('Error adding student:', error));
  }
}
