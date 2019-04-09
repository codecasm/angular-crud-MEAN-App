import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  //method for getting student details
  getAllStudent() {
    return this.http.get(environment.apiBaseUrl + '/students');
  }

  getStudent(id: String) {
    return this.http.get(environment.apiBaseUrl + '/students/' + id);
  }

  //method for creating or pushing data into students database
  createStudent(data) {
    return this.http.post(environment.apiBaseUrl + '/students', data);
  }

  //delete student record from the database
  deleteStudent(id: String) {
    return this.http.delete(environment.apiBaseUrl + '/students/' + id);
  }

  //to update the record in database
  updateStudent(id, data) {
    return this.http.put(environment.apiBaseUrl + '/students/' + id, data);
  }


}
