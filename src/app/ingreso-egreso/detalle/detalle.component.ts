import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filter, take, takeUntil } from 'rxjs/operators';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';
import { DashboardService } from '../../services/dashboard.service';
import { IngresoEgresoService } from '../../services/ingreso-egreso.service';
import { DialogService } from '../../services/dialog.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnDestroy {
  $destroy:Subject<boolean>=new Subject<boolean>()
  ingresosEgresos:IngresoEgreso[]|null=null
  constructor(private toastService:DialogService,private store:Store<AppState>,private ingresoegresoService:IngresoEgresoService) { }

  ngOnInit(): void {
    this.store.select("Items").pipe(takeUntil(this.$destroy)).pipe(filter(items => (items.items != null)))
    //esto hace que solo si es distinto de null, es decir que cuando haya datos se subscribe,
    //no es tan necesario el filter porque si no hay datos no pasa nada, esta el spinner
      .subscribe((iE: any) => {
      this.ingresosEgresos=iE.items
    })
  }
  ngOnDestroy() {
    this.$destroy.next(true)
    this.$destroy.unsubscribe()
  }

  borrarItem(id: string) {
    this.ingresoegresoService.deleteItem(id).then(resp => {
    this.toastService.openDialog('Eliminado correctamente',true,false,false)
    }).catch(err => {

      this.toastService.openDialog('Error al eliminar, porfavor intentelo mas tarde...',false,false,false)
    })

  }
  editarItem(id:string,item:IngresoEgreso) {
    const ingresoEgreso: IngresoEgreso = new IngresoEgreso('pruebaedit', 1, 'egreso')
    let itemNew={...item,id}
   this.toastService.openDialog('Ingrese los nuevos datos', true, false, true, itemNew)

  }

}
