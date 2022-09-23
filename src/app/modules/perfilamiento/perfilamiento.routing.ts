import { Routes, RouterModule } from '@angular/router';
import { PerfilamientoComponent } from './perfilamiento.component';

const routes: Routes = [
  {
    path: '',
    component:PerfilamientoComponent
  },
];

export const PerfilamientoRoutes = RouterModule.forChild(routes);
