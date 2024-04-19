import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';



const ELEMENT_DATA: IStudent[] = [
  {
    id: 1,
    firstName: 'Franco',
    lastName: 'Armani',
    isApproved: true,
    email: 'armani@gmail.com',
    createdAt: new Date(),
  },
  {
    id: 2,
    firstName: 'Héctor',
    lastName: 'Herrera',
    isApproved: false,
    email: 'herrera@example.com',
    createdAt: new Date(),
  },
  {
    id: 3,
    firstName: 'Paulo',
    lastName: 'Díaz',
    isApproved: true,
    email: 'diaz@example.com',
    createdAt: new Date(),
  },
  {
    id: 4,
    firstName: 'Leandro',
    lastName: 'Gonzalez Pirez',
    isApproved: false,
    email: 'pirez@example.com',
    createdAt: new Date(),
  },
  {
    id: 5,
    firstName: 'Enzo',
    lastName: 'Díaz',
    isApproved: true,
    email: 'enzodiaz@gmail.com',
    createdAt: new Date(),
  },
  {
    id: 6,
    firstName: 'Ignacio',
    lastName: 'Fernández',
    isApproved: false,
    email: 'fernandez@example.com',
    createdAt: new Date(),
  },
  {
    id: 7,
    firstName: 'Rodrigo',
    lastName: 'Villagra',
    isApproved: true,
    email: 'villagra@gmail.com',
    createdAt: new Date(),
  },
  {
    id: 8,
    firstName: 'Esequiel',
    lastName: 'Barco',
    isApproved: true,
    email: 'barco@example.com',
    createdAt: new Date(),
  },
  {
    id: 9,
    firstName: 'Claudio',
    lastName: 'Echeverri',
    isApproved: true,
    email: 'echeverri@gmail.com',
    createdAt: new Date(),
  },
  {
    id: 10,
    firstName: 'Facundo',
    lastName: 'Colidio',
    isApproved: true,
    email: 'colidio@example.com',
    createdAt: new Date(),
  },
  {
    id: 11,
    firstName: 'Miguel Ángel',
    lastName: 'Borja',
    isApproved: true,
    email: 'borja@example.com',
    createdAt: new Date(),
  },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})


export class UsersComponent {

  constructor(private matDialog: MatDialog) {}

  displayedColumns: string[] = ['id', 'firstName', 'lastName','email', 'createdAt', ];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<IStudent> | undefined;

  openDialog(): void {
    this.matDialog.open(UsersDialogComponent).afterClosed();
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table?.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table?.renderRows();
  }
}
