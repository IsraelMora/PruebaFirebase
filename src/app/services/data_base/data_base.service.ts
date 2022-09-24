import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class Data_baseService {

constructor(
  private afs: AngularFirestore,
) { }

// private col < T > ( ref : string | number | bigint | boolean | symbol | undefined | object | function , queryFn ? ) : AngularFirestoreCollection {
//   return typeof ref === " string " ? this.afs.collection ( ref , queryFn ) : ref ;
// }

}
