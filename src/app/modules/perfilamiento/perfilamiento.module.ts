import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilamientoComponent } from './perfilamiento.component';
import { PerfilamientoRoutes } from './perfilamiento.routing';

@NgModule({
  imports: [
    CommonModule,
    PerfilamientoRoutes,
  ],
  declarations: [PerfilamientoComponent]
})
export class PerfilamientoModule { }
