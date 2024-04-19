import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  students: IStudent[] = [
    {
      id: 1,
      firstName: 'Franco',
      lastName: 'Armani',
      email: 'armani@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Héctor',
      lastName: 'Herrera',

      email: 'herrera@example.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      firstName: 'Paulo',
      lastName: 'Díaz',
      email: 'diaz@example.com',
      createdAt: new Date(),
    },
    {
      id: 4,
      firstName: 'Leandro',
      lastName: 'Gonzalez Pirez',
      email: 'pirez@example.com',
      createdAt: new Date(),
    },
    {
      id: 5,
      firstName: 'Enzo',
      lastName: 'Díaz',
      email: 'enzodiaz@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 6,
      firstName: 'Ignacio',
      lastName: 'Fernández',
      email: 'fernandez@example.com',
      createdAt: new Date(),
    },
    {
      id: 7,
      firstName: 'Rodrigo',
      lastName: 'Villagra',
      email: 'villagra@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 8,
      firstName: 'Esequiel',
      lastName: 'Barco',
      email: 'barco@example.com',
      createdAt: new Date(),
    },
    {
      id: 9,
      firstName: 'Claudio',
      lastName: 'Echeverri',
      email: 'echeverri@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 10,
      firstName: 'Facundo',
      lastName: 'Colidio',
      email: 'colidio@example.com',
      createdAt: new Date(),
    },
    {
      id: 11,
      firstName: 'Miguel Ángel',
      lastName: 'Borja',
      email: 'borja@example.com',
      createdAt: new Date(),
    },
  ];

  constructor(private matDialog: MatDialog) {}

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'createdAt',
  ];
  dataSource = [...this.students];

  @ViewChild(MatTable) table: MatTable<IStudent> | undefined;

  openDialog(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (res) => {
          if (res) {
            this.dataSource = [...this.dataSource, res];
            console.log(this.dataSource);   
          }
        },
      });
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.students.length);
    this.dataSource.push(this.students[randomElementIndex]);
    this.table?.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table?.renderRows();
  }
}
