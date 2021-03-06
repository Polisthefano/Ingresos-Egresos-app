import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routesP: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: '', loadChildren: () => import('./ingreso-egreso/ingreso-egreso.module').then(m => m.IngresoEgresoModule),canLoad:[AuthGuard] },
  // cuando llegues a esa ruta, carga ese modulo con lazy loading es decir a demanda
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routesP)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
