import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { StudentService } from './student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailStudentComponent } from './students/detail-student/detail-student.component';
import { NotFoundComponent } from './students/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    DetailStudentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
