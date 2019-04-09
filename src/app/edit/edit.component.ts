import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {



  updateForm: FormGroup;
  public courses = ['Computer Science', 'Engineering', 'Law', 'Management'];
  private showMsg = false;

  public updateId;

  constructor(private fb: FormBuilder,
    private studentService: StudentService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router:Router
  ) {

    this.updateForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      contact: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required,Validators.email,Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]],
      course: ['', Validators.required],
      address: ['', Validators.required]
    });

  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const studentId = params.get('id');
      this.updateId=studentId;
      
      if (studentId) {
        this.studentService.getStudent(studentId).subscribe((res: any) => {
          // console.log(res.docs);
          // this.students = res.docs;

          this.updateForm.patchValue({
            name: res.docs.name,
            contact: res.docs.contact,
            gender: res.docs.gender,
            email: res.docs.email,
            course: res.docs.course,
            address: res.docs.address
          })

        });
      }

    })
  }


  onUpdate() {
    
    // console.log(this.registrationForm.value);
    this.studentService.updateStudent(this.updateId,this.updateForm.value).subscribe((res: any) => {
      JSON.stringify(res)
      this.showMsg = true;
      // console.log(this.updateForm.value);
      
      // console.log(JSON.stringify(res))
      // this.router.navigate(['/student-list/'])
    });
  }

}
