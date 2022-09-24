import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    ) {}

  logout(){
    this.router.navigate(['']);
    sessionStorage.clear();
    this.auth.signOut();
  }
}
