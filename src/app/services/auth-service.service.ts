import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afa:AngularFireAuth) { }

  crearUsuario(nombre:string,email:string,pass:string){
    return this.afa.createUserWithEmailAndPassword(email,pass) //este metodo de createUser lo pone como usuario logueado automaticamente cuando lo crea
  }

  login(email:string,pass:string)
  {
    return this.afa.signInWithEmailAndPassword(email,pass)
  }
}
