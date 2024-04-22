import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './pages/users/users.module';
import { PipesDirectivasModule } from './pages/pipes-directivas/pipes-directivas.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    UsersModule,
    PipesDirectivasModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
