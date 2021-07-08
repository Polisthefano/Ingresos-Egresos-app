import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService:AuthServiceService,private router:Router,public dialogService:DialogService) { }
  ngOnInit(): void {
  }
  

submit(formulario:any){
  
  this.authService.crearUsuario(formulario.nombre,formulario.email,formulario.pass).then(resp=>{
    this.dialogService.openDialog('Usuario Creado Correctamente',true) //en esa resp envia uid id unico de user
    
  }).catch(err=>{
    this.dialogService.openDialog(err,false)
  })
}

}
