import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'perfilamiento',
        loadChildren: () => import('../perfilamiento/perfilamiento.component').then(m => m.PerfilamientoComponent)
      },
    ]
  },
];

export const MainRoutes = RouterModule.forChild(routes);
