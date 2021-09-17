import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';
import { Store } from '@ngrx/store';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../../shared/ui.accions';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  cargando: boolean = false;
  constructor(private store:Store<AppState>,private dialogService:DialogService,private authService:AuthServiceService) { }
  subcription: Subscription=new Subscription();
  ngOnInit(): void {

   this.subcription= this.store.select('ui').subscribe((resp:any) => { //te suscribis dejando un socket que escucha en todo momento a esa propiedad del redux
      this.cargando = resp.isLoading
    })
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  submit(formulario:any)
  {
    this.store.dispatch(new ActivarLoadingAction())
    this.authService.login(formulario.email,formulario.pass).then(resp=>{
      this.dialogService.openDialog('Sesion iniciada correctamente', true,true)

    this.store.dispatch(new DesactivarLoadingAction())

    }).catch(err=>{

      this.dialogService.openDialog('Error al iniciar Sesion', false,false)
      this.store.dispatch(new DesactivarLoadingAction())

    })
  }

}
