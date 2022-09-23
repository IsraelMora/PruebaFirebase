import { environment } from './../../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityComponent } from './identity.component';
import { IdentityRoutes } from './identity.routing';
import { USE_DEVICE_LANGUAGE, LANGUAGE_CODE } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    IdentityRoutes,
    MatSnackBarModule,
  ],
  declarations: [IdentityComponent],
  providers: [ 
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig},
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
    { provide: LANGUAGE_CODE, useValue: 'es' },
  ],
})
export class IdentityModule {}
