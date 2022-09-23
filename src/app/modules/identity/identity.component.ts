import { LogoutService } from './../../services/logout/logout.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css'],
})
export class IdentityComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private logoutService : LogoutService,
    private _snackBar : MatSnackBar
  ) {}

  ngOnInit() {}

  async login() {
    console.log('prueba ingreso');
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((r) => {
      if (r.user) {
        this.afs
          .collection('users', (ref) =>
            ref.where('email', '==', r.user!.email)
          )
          .get()
          .forEach((x) => {
            if (x.size > 0) {
              this.router.navigate(['main']);
            }else{
              this.logoutService.logout();
              this._snackBar.open("Usuario no permitido", "",{
                duration: 3000,
              });
            }
          });
      }
    });
  }
}
