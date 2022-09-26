import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Modal_confirmationComponent } from 'src/app/components/loading/modal_confirmation/modal_confirmation.component';
import { Collection_users, Doc_users } from 'src/app/models/collection_users';
import { Form_userComponent } from './form_user/form_user.component';

@Component({
  selector: 'app-perfilamiento',
  templateUrl: './perfilamiento.component.html',
  styleUrls: ['./perfilamiento.component.css'],
})
export class PerfilamientoComponent implements OnInit {
  private usersCollection: AngularFirestoreCollection<Collection_users>;
  public dataSource: any = [];
  public displayedColumns = ['userName', 'email', 'action'];
  @ViewChild(MatTable) table!: MatTable<Collection_users>;

  constructor(private afs: AngularFirestore, private dialog: MatDialog) {
    this.usersCollection = afs.collection<Collection_users>('users');
  }

  ngOnInit() {
    this.csltUsers();
  }

  csltUsers(){
    this.usersCollection.snapshotChanges().subscribe((users) => {
      let dataUsers: Array<Doc_users> = [];
      users.map((user) => {
        dataUsers.push({
          id: user.payload.doc.id,
          ...user.payload.doc.data(),
        });
      });
      this.dataSource = dataUsers;
    });
  }

  setDataSource() {}

  openDialog(action: 'add'|'update'|'delete', data?:any) {
    let component;
    switch (action) {
      case 'add':
        component = Form_userComponent;
        break;
      case 'update':
        component = Form_userComponent;
        break;
      case 'delete':
        component = Modal_confirmationComponent;
        break;
    }
    let dialog = this.dialog.open(component,{
      data:data??null
    });
    dialog.afterClosed().subscribe((r) => {
      if (!r) return;
      switch (action) {
        case 'add':
          this.addUser(r);
          break;
        case 'update':
          this.updateUser(data.user,r);
          break;
        case 'delete':
          this.deleteUser(data.user);
          break;
      }
    });
  }

  addUser(user: Collection_users) {
    this.usersCollection.add(user);
  }

  deleteUser(user: Doc_users) {
    this.afs.doc<Collection_users>("users/"+user.id).delete();
  }

  updateUser(user: Doc_users, update: Collection_users) {
    this.afs.doc<Collection_users>("users/"+user.id).update(update);
  }
}
