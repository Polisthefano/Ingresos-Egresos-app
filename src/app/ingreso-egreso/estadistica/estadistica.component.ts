import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';
import { LockChanges } from '@ngrx/store-devtools/src/actions';

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
  egresos:number=0
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('Items').subscribe((items: any) => {
    console.log(items);

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
}

}
