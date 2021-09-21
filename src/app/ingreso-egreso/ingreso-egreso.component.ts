import { IngresoEgresoService } from './../services/ingreso-egreso.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngresoEgreso, TipoIngreso } from '../models/ingreso-egreso.model';
import { DialogService } from '../services/dialog.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.accions';
import { SetIngresoEgreso} from './ingreso-egreso.actions';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.css']
})
export class IngresoEgresoComponent implements OnInit,OnDestroy {
  Subscription2: Subscription = new Subscription();
  loading: boolean = false
  Subscription: Subscription = new Subscription();
  forma: FormGroup
  tipo:TipoIngreso='ingreso'
  constructor(public authService:AuthServiceService,private store:Store<AppState>,private ingresoEgresoService:IngresoEgresoService,private fb: FormBuilder,private dialogService:DialogService) {
    this.forma = new FormGroup({
      "descripcion": new FormControl('', [Validators.required]),
      'monto': new FormControl(0,[Validators.required,Validators.min(1)]) //recordar que este validator es para
    })
  }

  ngOnInit(): void {

    this.Subscription=this.store.select('ui').subscribe((resp:any) => {
    this.loading=resp.isLoading
  })
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
    this.Subscription2.unsubscribe()
  }

  saveForm() {
    this.store.dispatch(new ActivarLoadingAction());
    let objetoToInsert = new IngresoEgreso(this.forma.value['descripcion'], this.forma.value['monto'], this.tipo)
    this.ingresoEgresoService.insertIngresoEgreso(objetoToInsert).then(resp => {
      this.store.dispatch(new DesactivarLoadingAction());
      this.dialogService.openDialog(`${objetoToInsert.tipo} guardado Correctamente`, true, false)
      this.forma.reset({
      })
    }).catch(err => {
      this.store.dispatch(new DesactivarLoadingAction());
      console.log((err));
    this.dialogService.openDialog('Error al guardar tu'+this.tipo+"",false,false)
    });
    ;

  }


}
