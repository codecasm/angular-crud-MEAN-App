import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


import { StudentService } from '../services/student.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public courses = ['Computer Science', 'Engineering', 'Law', 'Management'];
  private showMsg = false;
  public students = [];

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private studentService: StudentService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      contact: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required,Validators.email,Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]],
      course: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  
  clearForm() {
    this.registrationForm.reset()
  }

  ngOnInit() {

    
  }

  onSubmit() {
    // console.log(this.registrationForm.value);
    this.studentService.createStudent(this.registrationForm.value).subscribe((res: any) => {
      JSON.stringify(res)
      this.showMsg = true;
      this.clearForm();
    });
  }

  onClear(){
    this.clearForm();
  }


}
