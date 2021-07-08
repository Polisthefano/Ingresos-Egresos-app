import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { AuthGuard } from '../guards/auth.guard';

export const routesChildren: Routes = [
  {path: '', component: EstadisticaComponent},
  {path:'ingreso-egreso',component:IngresoEgresoComponent},
  {path:'detalle',component: DetalleComponent},
];

