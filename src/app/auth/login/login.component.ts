import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private SnackBar:SnackBarComponent,private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(formulario:any)
  {
    this.authService.login(formulario.email,formulario.pass).then(resp=>{
      alert('Logueado correctamente')
      this.SnackBar.openSnackBar('logueado Correctamente');
      this.router.navigateByUrl('/')
    }).catch(err=>{
      alert('Usuario o password incorrecta'+err)
    })
  }

}
