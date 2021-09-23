import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { DialogService } from '../../services/dialog.service';
import { User } from '../../models/usuario.model';
import { DesactivarLoadingAction } from '../../shared/ui.accions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {
  subcription: Subscription=new Subscription();
  cargando: boolean = false;
  constructor(private store:Store<AppState>,private authService:AuthServiceService,private router:Router,public dialogService:DialogService) { }
  ngOnInit(): void {
    this.subcription=this.store.select('ui').subscribe((resp:any) => { //te suscribis dejando un socket que escucha en todo momento a esa propiedad del redux
      console.log(resp)
      this.cargando = resp.isLoading
    })
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }


async submit(formulario:any){
   try{           //try catch y funcion async para hacer varios .then y catchs para varios .catch de promises
  const resp = await this.authService.crearUsuario(formulario.nombre,formulario.email,formulario.pass)
  const user=new User(formulario.nombre,resp.user!.email!,resp.user!.uid)
  const resp2= await  this.authService.insertUserDatabase(user)
  this.store.dispatch(new DesactivarLoadingAction())
    this.dialogService.openDialog('Usuario Creado Correctamente',true,true,false)
   }
   catch(err:any){
     console.log(err)
     let error='Ocurrio un error'
     if(err.message=='The email address is already in use by another account.')
     {
       error='Este email ya esta registrado, pruebe con otro'
     }
     this.store.dispatch(new DesactivarLoadingAction())
    this.dialogService.openDialog(error,false,false,false)
   }

}
}
