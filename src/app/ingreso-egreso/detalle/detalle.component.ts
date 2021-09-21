import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filter } from 'rxjs/operators';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  ingresosEgresos:IngresoEgreso[]|null=null
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select("Items").pipe(filter(items => (items.items != null)))
    //esto hace que solo si es distinto de null, es decir que cuando haya datos se subscribe
      .subscribe((iE:any) => {
      this.ingresosEgresos=iE.items
    })
  }

}
