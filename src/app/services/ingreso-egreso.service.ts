import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(private store:Store<AppState>,private firestore:AngularFirestore,private authService:AuthServiceService) { }

  insertIngresoEgreso(ingresoEgreso: IngresoEgreso)
  {
    let userActual = this.authService.getUser();
    //usamos este metodo para traernos el usuario, pero hubiese sido lo mismo
    //traerselo del redux
    console.log(ingresoEgreso,{ ...ingresoEgreso }) //manejar asi el objecto, le saca la cabecera(osea lo que va antes de la llave) que es un string, manda solo los valores
    return this.firestore.doc(`${userActual.uid}/ingresosEgresos`).collection('items').add({ ...ingresoEgreso }) //mandamos asi, porque manda solo los valores de ese objeto y no la cabecera
  }

   getAllItems(){
    let userActual:any = this.authService.getUser();
    return this.firestore.collection(`${userActual.uid}/ingresosEgresos/items/`).valueChanges()


 }

}
