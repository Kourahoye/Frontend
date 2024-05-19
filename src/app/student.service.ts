import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Student } from './interfaces/student';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudent():Observable<Student[]>{
    return this.http.get<Student[]>("http://127.0.0.1:8000/api/students/")
  }

  

  addStudent(data:Student):Observable<Student>{
    return this.http.post<Student>("http://127.0.0.1:8000/api/students/",data)
  }

  delStudent(id_student:number):Observable<Student>{
    return this.http.delete<Student>(`http://127.0.0.1:8000/api/students/${id_student}`)
  }

  updateStudent(id_student:number,data:Student):Observable<Student>{
    return this.http.put<Student>(`http://127.0.0.1:8000/api/students/${id_student}`,data)
  }

  getSingleStudent(id_student:number):Observable<Student>{
    return this.http.get<Student>(`http://127.0.0.1:8000/api/students/${id_student}`) 
  }




}
