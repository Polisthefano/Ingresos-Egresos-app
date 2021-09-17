import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { User } from '../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private store:Store<AppState>,private firestore:AngularFirestore) { }

  async initItemsUser() {
    let user
    await this.store.select('Auth').subscribe((user: any) => {
       console.log(user)
      user=user
    })
  console.log(user)
    // this.firestore.collection(`${uid}/ingresosEgresos/items`).doc().valueChanges().subscribe(resp => {
    //     console.log(resp)
    //   })
   }



}
