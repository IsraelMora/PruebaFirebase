import { Routes, RouterModule } from '@angular/router';
import { IdentityComponent } from './identity.component';

const routes: Routes = [
  {
    path: '',
    component: IdentityComponent
  },
];

export const IdentityRoutes = RouterModule.forChild(routes);
