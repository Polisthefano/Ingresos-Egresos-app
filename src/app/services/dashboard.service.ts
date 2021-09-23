import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { User } from '../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filter, map } from 'rxjs/operators';
import { SetIngresoEgreso } from '../ingreso-egreso/ingreso-egreso.actions';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private store:Store<AppState>,private firestore:AngularFirestore) { }

  listenerIngresoEgreso() {
    this.store.select('Auth').pipe(filter(auth => auth.user != null)).subscribe(user => { //muy util, sirve para esperar que llegue la data por ejemplo
      //el filter lo que hace es no subscribirse si no cumple con la condicion (condicion que debe retornar true o false
      //), el map es para retornar solo lo que necesitas y no todo el arreglo u objeto
      console.log(user,"solo llega se susbcribe si es distinto de null")
    })
  }


}
