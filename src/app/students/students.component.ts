import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';


export let studentList = [
  {
    name: 'Franco',
    lastName: 'Armani',
    isApproved: true,
    email: 'armani@gmail.com',
  },
  {
    name: 'Héctor',
    lastName: 'Herrera',
    isApproved: false,
    email: 'herrera@example.com',
  },
  {
    name: 'Paulo',
    lastName: 'Díaz',
    isApproved: true,
    email: 'diaz@example.com',
  },
  {
    name: 'Leandro',
    lastName: 'Gonzalez Pirez',
    isApproved: false,
    email: 'pirez@example.com',
  },
  {
    name: 'Enzo',
    lastName: 'Díaz',
    isApproved: true,
    email: 'enzodiaz@gmail.com',
  },
  {
    name: 'Ignacio',
    lastName: 'Fernández',
    isApproved: false,
    email: 'fernandez@example.com',
  },
  {
    name: 'Rodrigo',
    lastName: 'Villagra',
    isApproved: true,
    email: 'villagra@gmail.com',
  },
  {
    name: 'Esequiel',
    lastName: 'Barco',
    isApproved: true,
    email: 'barco@example.com',
  },
  {
    name: 'Claudio',
    lastName: 'Echeverri',
    isApproved: true,
    email: 'echeverri@gmail.com',
  },
  {
    name: 'Facundo',
    lastName: 'Colidio',
    isApproved: true,
    email: 'colidio@example.com',
  },
  {
    name: 'Miguel Ángel',
    lastName: 'Borja',
    isApproved: true,
    email: 'borja@example.com',
  },
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  showStudents = false;
  students = studentList

  constructor(private studentsService: StudentsService) {}

  // ngOnInit(): void {
  //   this.students = this.studentsService.getStudents();
  // }

  deleteStudent(email: any) {
    this.studentsService.deleteStudent(email);
  }
}
