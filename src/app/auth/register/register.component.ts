import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { DialogService } from '../../services/dialog.service';
import { User } from '../../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService:AuthServiceService,private router:Router,public dialogService:DialogService) { }
  ngOnInit(): void {
  }
  

async submit(formulario:any){
   try{           //try catch y funcion async para hacer varios .then y catchs para varios .catch de promises
  const resp = await this.authService.crearUsuario(formulario.nombre,formulario.email,formulario.pass)
  const user=new User(formulario.nombre,resp.user!.email!,resp.user!.uid)
  const resp2= await  this.authService.insertUserDatabase(user)
  
    this.dialogService.openDialog('Usuario Creado Correctamente',true)
   }
   catch(err){
     console.log(err)
     let error='Ocurrio un error'
     if(err.message=='The email address is already in use by another account.')
     {
       error='Este email ya esta registrado, pruebe con otro'
     }
    this.dialogService.openDialog(error,false)
   }
  
}
}
