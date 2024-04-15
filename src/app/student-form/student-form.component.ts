import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  public studentForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      approved: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const newStudent = {
        name: this.studentForm.value.name,
        lastName: this.studentForm.value.lastName,
        isApproved: this.studentForm.value.approved === 'si' ? true : false,
        email: this.studentForm.value.email,
      };

      // Agrega el nuevo estudiante al servicio
      this.studentsService.addStudent(newStudent);

      // Limpia el formulario después de agregar el estudiante
      this.studentForm.reset();

      console.log('Nuevo estudiante agregado:', newStudent);
    } else {
      console.log('error');
      
    }
  }
}

