import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent {
  student : Student | undefined
  id_student:any
  constructor( private service:StudentService, private route:ActivatedRoute){
    this.id_student = this.route.snapshot.paramMap.get('id')
    this.getStudent(this.id_student)
  }


  getStudent(id:Number){
    this.service.getSingleStudent(this.id_student).subscribe({
      next:(response)=>{
        this.student = response
      },
      error:(error)=>console.log(error)
    })
  }
}
