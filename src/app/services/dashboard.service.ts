import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { User } from '../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { map } from 'rxjs/operators';
import { SetIngresoEgreso } from '../ingreso-egreso/ingreso-egreso.actions';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private store:Store<AppState>,private firestore:AngularFirestore) { }
 
}
