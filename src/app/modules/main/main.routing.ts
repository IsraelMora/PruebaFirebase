import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'perfilamiento',
        loadChildren: () => import('../perfilamiento/perfilamiento.module').then(m => m.PerfilamientoModule)
      },
    ]
  },
];

export const MainRoutes = RouterModule.forChild(routes);
