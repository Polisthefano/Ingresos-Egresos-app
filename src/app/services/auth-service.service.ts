import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map} from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/usuario.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { DesactivarLoadingAction, ActivarLoadingAction } from '../shared/ui.accions';
import { SetUserAction } from '../auth/auth.actions';
import { DashboardService } from './dashboard.service';
import { SetIngresoEgreso, UnsetIngresoEgreso } from '../ingreso-egreso/ingreso-egreso.actions';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  suscription:Subscription=new Subscription()
  private usuario: User|null=null;
  constructor(private dashboardService:DashboardService,private router:Router,private afa:AngularFireAuth,private store:Store<AppState>,private firestore:AngularFirestore) { }

  initAuthListener(){
    this.afa.authState.subscribe(firebaseUser=>{
      console.log(firebaseUser) //con este metodo me suscribo a todos los datos del usuario logueado
      if (firebaseUser)
      {

        this.firestore.doc(`${firebaseUser.uid}/usuario`).get().toPromise().then((user:any) => {
          let usuario: User = user.data()
          this.store.dispatch(new SetUserAction(usuario));
          this.cargarIngresosEgresos(usuario)
          this.usuario=usuario
        })

      }
    })
  }

  crearUsuario(nombre: string, email: string, pass: string) {
    this.store.dispatch(new ActivarLoadingAction())
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

  insertUserDatabase(user:User)
  {
  return this.firestore.doc(`${user.uid}/usuario`).set({
    nombre:user.nombre,
    email:user.email,
    uid:user.uid
  })
  }

  getUser() {
    return { ...this.usuario } //esto lo hacemos con spread para pasar una copia y no por referencia
    //esto se hace para obtener el usuario actual, podria haberselo buscado en el redux y era lo mismo
  }

  cargarIngresosEgresos(usuario:any) {
  //usamos snapshot porque podemos acceder al id que es la cabecera del documento y con value changes no podiamos
    this.suscription = this.firestore.collection(`${usuario.uid}/ingresosEgresos/items`).snapshotChanges().subscribe((items: any[]) => {
      const ingresosEgresos:IngresoEgreso[]=[]
      items.forEach(item => {
        let inEg: IngresoEgreso = { ...item.payload.doc.data(),id:item.payload.doc.id} //podemos hacerlo tambien como abajo, pero esto es mas simple y mejor
        // let inEg: IngresoEgreso = new IngresoEgreso(obj.descripcion,obj.monto,obj.tipo, item.payload.doc.id)
        ingresosEgresos.push(inEg)
      })
     this.store.dispatch(new SetIngresoEgreso(ingresosEgresos))
    })
  }
}
