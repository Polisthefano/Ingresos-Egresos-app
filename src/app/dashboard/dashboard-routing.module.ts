import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { routesChildren } from './dashboard.routes';
export const routes: Routes = [
  { path: '', component: DashboardComponent, children: routesChildren},
  //me lleva a las rutas hijas cuando especificamos las rutas en children, canLoad a diferencia de canActivate tambien usa el guard
  //pero previene activarlo, canload previene cargarlo directamente entonces usamos lazyloading
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
