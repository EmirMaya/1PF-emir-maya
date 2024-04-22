import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesDirectivasRoutingModule } from './pipes-directivas-routing.module';
import { PipesDirectivasComponent } from './pipes-directivas.component';
import { MyCustomTextTransformPipe } from './my-custom-text-transform.pipe';
import { MaterialModule } from '../../../../modules/material.module';


@NgModule({
  declarations: [
    PipesDirectivasComponent,
    MyCustomTextTransformPipe
  ],
  imports: [
    CommonModule,
    PipesDirectivasRoutingModule,
    MaterialModule

  ],
  exports: [
    PipesDirectivasComponent,
  ]
})
export class PipesDirectivasModule { }
