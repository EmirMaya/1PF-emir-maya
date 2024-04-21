import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrl: './users-dialog.component.scss',
})
export class UsersDialogComponent {
  public studentForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<UsersDialogComponent>
  ) {
    this.studentForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúÑñ]+$')],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúÑñ]+$')],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],
      role: ['STUDENT', [Validators.required]],
    });
  }

  onSave(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      // const formData = this.studentForm.value;
      // formData.isApproved = formData.isApproved === 'si';
      this.matDialogRef.close(this.studentForm.value);
    }
  }
}
