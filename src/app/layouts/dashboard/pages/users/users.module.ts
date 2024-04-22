import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from '../../../../modules/material.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule { }
