
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreDevtools } from '@ngrx/store-devtools';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../app.reducer';
import { SetIngresoEgreso, UnsetIngresoEgreso } from '../ingreso-egreso/ingreso-egreso.actions';
import { User } from '../models/usuario.model';
import { AuthServiceService } from '../services/auth-service.service';
import { DashboardService } from '../services/dashboard.service';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  usuario:any=null
subcription2:Subscription=new Subscription()

  constructor(private dashboardService:DashboardService,private authService:AuthServiceService,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.dashboardService.listenerIngresoEgreso()
  }
  ngOnDestroy(): void {
  }




}
