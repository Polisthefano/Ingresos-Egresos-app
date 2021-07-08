import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialogService:DialogService,private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
  submit(formulario:any)
  {
    this.authService.login(formulario.email,formulario.pass).then(resp=>{
      this.dialogService.openDialog('Sesion iniciada correctamente',true)
      
    }).catch(err=>{
      
      this.dialogService.openDialog('Error al iniciar Sesion',false)

    })
  }

}
