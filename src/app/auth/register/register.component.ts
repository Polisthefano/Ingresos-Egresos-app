import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService:AuthServiceService,private router:Router) { }
  ngOnInit(): void {
  }
  

submit(formulario:any){
  
  this.authService.crearUsuario(formulario.nombre,formulario.email,formulario.pass).then(resp=>{
    alert('Usuario creado correctamente') //en esa resp envia uid id unico de user
    this.router.navigateByUrl('/')
  }).catch(err=>{
    alert('Error al crear User '+err)
  })
}

}
