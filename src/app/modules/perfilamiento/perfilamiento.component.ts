import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
// import { Observable } from 'rxjs';
import { Collection_users } from 'src/app/models/collection_users';
import { Form_add_userComponent } from './form_add_user/form_add_user.component';

@Component({
  selector: 'app-perfilamiento',
  templateUrl: './perfilamiento.component.html',
  styleUrls: ['./perfilamiento.component.css'],
})
export class PerfilamientoComponent implements OnInit {

  private usersCollection: AngularFirestoreCollection<Collection_users>;
  public dataSource: MatTableDataSource<Collection_users>=new MatTableDataSource(
    [
      {
        email: "isramora3@gmail.com",
        userName: "isramora"
      }
    ]
  );
  public displayedColumns=["userName","email"]

  constructor(
    private afs: AngularFirestore,
    private dialog: MatDialog,
    ) {
    this.usersCollection = afs.collection<Collection_users>('users');
  }

  ngOnInit() {
    this.setDummyDataSource();
  }

  setDummyDataSource(): void {
    this.dataSource.data=[
      {
        email: "isramora3@gmail.com",
        userName: "Israel Mora"
      }
    ]
  }

  openDialog(action: 'add') {
    let component;
    let functionAction : any;
    switch (action) {
      case 'add':
        component = Form_add_userComponent;
        functionAction = this.adduser;
        break;
    }
    let dialog = this.dialog.open(component);
    dialog.afterClosed().subscribe(r => {
      if(!r)return;
      functionAction(r);
    })
  }

  adduser(user: Collection_users) {
    this.usersCollection.add(user);
  }
}
