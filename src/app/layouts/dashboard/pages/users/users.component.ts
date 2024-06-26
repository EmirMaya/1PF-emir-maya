import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import {
  Observable,
  Subscription,
  debounceTime,
  delay,
  distinctUntilChanged,
  of,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnDestroy {
  private students: IStudent[] = [
    {
      id: 1,
      firstName: 'Franco',
      lastName: 'Armani',
      email: 'armani@gmail.com',
      role: 'ADMIN',
      createdAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Héctor',
      lastName: 'Herrera',
      email: 'herrera@example.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 3,
      firstName: 'Paulo',
      lastName: 'Díaz',
      email: 'diaz@example.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 4,
      firstName: 'Leandro',
      lastName: 'Gonzalez Pirez',
      email: 'pirez@example.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 5,
      firstName: 'Enzo',
      lastName: 'Díaz',
      email: 'enzodiaz@gmail.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 6,
      firstName: 'Ignacio',
      lastName: 'Fernández',
      email: 'fernandez@example.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 7,
      firstName: 'Rodrigo',
      lastName: 'Villagra',
      email: 'villagra@gmail.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 8,
      firstName: 'Esequiel',
      lastName: 'Barco',
      email: 'barco@example.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 9,
      firstName: 'Claudio',
      lastName: 'Echeverri',
      email: 'echeverri@gmail.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 10,
      firstName: 'Facundo',
      lastName: 'Colidio',
      email: 'colidio@example.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
    {
      id: 11,
      firstName: 'Miguel Ángel',
      lastName: 'Borja',
      email: 'borja@example.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
  ];

  students$!: Observable<IStudent[]>;

  private studentsSubscription: Subscription | undefined;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'role',
    'createdAt',
    'actions',
  ];

  @ViewChild(MatTable) table: MatTable<IStudent> | undefined;

  constructor(private matDialog: MatDialog) {
    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.studentsSubscription) {
      this.studentsSubscription.unsubscribe();
    }
  }

  dataSource = [...this.students];
  // Mock data retrieval using Promise
  getDataPromise(): Promise<IStudent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.students);
      }, 1000);
    });
  }

  // Mock data retrieval using Observable
  getDataObservable(): Observable<IStudent[]> {
    return of(this.students).pipe(delay(1000));
  }

  loadData() {
    this.students$ = this.getDataObservable();
    this.studentsSubscription = this.students$.subscribe();
  }
  openDialog(editingUser?: IStudent): void {
    this.matDialog
      .open(UsersDialogComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (res) => {
          if (res) {
            if (editingUser) {
              this.dataSource = this.dataSource.map((data) =>
                data.id === editingUser.id ? { ...data, ...res } : data
              );
            } else {
              res.id = new Date().getTime().toString().substring(0, 4);
              res.createdAt = new Date();
              this.dataSource = [...this.dataSource, res];
              // console.log(this.dataSource);
            }
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

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete?')) {
      this.dataSource = this.dataSource.filter((data) => data.id !== id);
    }
  }
}
