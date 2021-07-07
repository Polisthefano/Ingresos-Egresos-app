import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(formulario:any)
  {
    this.authService.login(formulario.email,formulario.pass).then(resp=>{
      alert('Logueado correctamente')
      this.router.navigateByUrl('/')
    }).catch(err=>{
      alert('Usuario o password incorrecta'+err)
    })
  }

}
