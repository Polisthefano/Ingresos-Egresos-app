import { IngresoEgresoModule } from './../ingreso-egreso/ingreso-egreso.module';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IngresoEgresoReducer } from '../ingreso-egreso/ingreso-egreso.reducer';

@NgModule({
  declarations: [ LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IngresoEgresoModule
  ]
})
export class AuthModule { }
