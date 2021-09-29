import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderInEgPipe } from '../pipes/order-in-eg.pipe';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import {StoreModule } from '@ngrx/store';
import { IngresoEgresoReducer } from './ingreso-egreso.reducer';



@NgModule({
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    OrderInEgPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('Items', IngresoEgresoReducer) //forFeatur3 se usa para lazy loading de store, le insertas ese reducer
    //al app reducer, expandis el store actual
  ]
})
export class IngresoEgresoModule { }
