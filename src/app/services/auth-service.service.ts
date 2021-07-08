import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router,private afa:AngularFireAuth) { }

  initAuthListener(){
    this.afa.authState.subscribe(firebaseUser=>{
      console.log(firebaseUser) //con este metodo me suscribo a todos los datos del usuario logueado
    })
  }

  crearUsuario(nombre:string,email:string,pass:string){
    return this.afa.createUserWithEmailAndPassword(email,pass) //este metodo de createUser lo pone como usuario logueado automaticamente cuando lo crea
  }

  login(email:string,pass:string)
  {
    return this.afa.signInWithEmailAndPassword(email,pass)
  }

  logout()
  {
    return this.afa.signOut() //este logout cierra la sesion independientemente del metodo para loguearte que hayas usado
  }

  isLog()
  {
    return <Observable<boolean>>this.afa.authState
    .pipe(
      map(user=>{
      if(user)
      {
       
        return true;
      }
      else{
        this.router.navigateByUrl('/login') //solo redireccionamos si es falso
        return false
      }
      }
    )
    )
  }
}
