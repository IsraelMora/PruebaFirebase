import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./modules/identity/identity.module').then(m => m.IdentityModule)
  },
  {
  path: 'main',
  loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
  // canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToLogin},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
