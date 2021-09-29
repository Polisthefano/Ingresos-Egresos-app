import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';
import { LockChanges } from '@ngrx/store-devtools/src/actions';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {  Label } from 'ng2-charts';
import { AppStateIngre } from '../ingreso-egreso.reducer';
@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {


ingresosEgresos:IngresoEgreso[]|null=null
  cantIngresos:number = 0
  cantEgresos:number=0
  ingresos: number = 0
  egresos: number = 0

  ChartType: ChartType = 'pie';
  ChartData: ChartDataSets[] = [];
  ChartLabels: Label[] = ['Ingresos', 'Egresos'];
  pieChartColors = [
    {
      backgroundColor: ['#198754', '#dc3545'],
    },
  ];
   pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },

  };
   pieChartLegend = true;
  constructor(private store:Store<AppStateIngre>) { }

  ngOnInit(): void {
    this.store.select('Items').subscribe((items: any) => {

      this.ingresosEgresos = items.items
      this.calcularIngresosEgresos()
  })
  }
  calcularIngresosEgresos() {
    this.ingresosEgresos?.forEach(item => {
      if (item.tipo == 'egreso') {
        this.cantEgresos++
      this.egresos=this.egresos+item.monto
      }
      else {
        this.cantIngresos++
        this.ingresos=this.ingresos+item.monto
      }
    })
    let total = this.egresos + this.ingresos
    let porcentajeIngresos = (this.ingresos * 100) / total
    let porcentajeEgresos = (this.egresos * 100) / total

    this.ChartData = [{ data: [Math.round(porcentajeIngresos), Math.round(porcentajeEgresos)],   }]

}

}
