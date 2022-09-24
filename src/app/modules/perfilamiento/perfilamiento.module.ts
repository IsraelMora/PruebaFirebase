import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilamientoComponent } from './perfilamiento.component';
import { PerfilamientoRoutes } from './perfilamiento.routing';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { Form_add_userComponent } from './form_add_user/form_add_user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    PerfilamientoRoutes,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  declarations: [PerfilamientoComponent,Form_add_userComponent],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig},]
})
export class PerfilamientoModule { }
