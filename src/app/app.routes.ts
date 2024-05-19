import { Routes } from '@angular/router';
import { StudentListComponent } from './students/student-list/student-list.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { DetailStudentComponent } from './students/detail-student/detail-student.component';
import { NotFoundComponent } from './students/not-found/not-found.component';

export const routes = [
    { path: '', component: StudentListComponent },
    { path: 'etudiants', component: StudentListComponent },
    { path: 'add-student', component: AddStudentComponent },
    { path: 'edit-student/:id', component: EditStudentComponent },
    { path: 'detail-student/:id', component: DetailStudentComponent },
    { path: '**', component: NotFoundComponent },
];
