import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { studentList } from './students/students.component';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsSubject = new BehaviorSubject<any[]>(studentList);
  students$ = this.studentsSubject.asObservable();

  constructor() {}

  getStudents() {
    return this.studentsSubject.value;
  }

  addStudent(student: any) {
    const currentStudents = this.studentsSubject.value;
    currentStudents.push(student);
    this.studentsSubject.next(currentStudents);
  }

  deleteStudent(email: string) {
    const currentStudents = this.studentsSubject.value;
    console.log(currentStudents);
    const updatedStudents = currentStudents.filter(student => {student.email !== email});
    this.studentsSubject.next(updatedStudents);
  }

}
