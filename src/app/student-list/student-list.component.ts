import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  private students = [];

  constructor(private http: HttpClient, private studentService: StudentService,private router:Router) { }

  ngOnInit() {

    this.fetchData();
  }

  // to fetch data for all students available in database
  fetchData() {
    this.studentService.getAllStudent().subscribe((res: any) => {
      // console.log(res.docs);
      this.students = res.docs;
    });
  }

  //method to be called when delete button is clicked in UI
  onDelete(id) {
    this.deleteStudent(id);
  }

  //method to delete the record with current selected id
  deleteStudent(id) {
    this.studentService.deleteStudent(id).subscribe((res: any) => {
      JSON.stringify(res)
      //load view segment after delete
      this.fetchData();
    })
  }

  onEdit(id) {
    this.router.navigate(['/edit',id]);
  }
}
