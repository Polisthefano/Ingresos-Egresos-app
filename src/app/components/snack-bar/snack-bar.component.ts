import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoIngreso } from 'src/app/models/ingreso-egreso.model';
import { IngresoEgresoService } from '../../services/ingreso-egreso.service';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css'],
})

export class SnackBarComponent implements OnInit {

  constructor(private ingresoegresoService:IngresoEgresoService,private dialog:MatDialog,
    public dialogRef: MatDialogRef<SnackBarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { dialogRef.disableClose = true; }
  tipoIngreso:Array<TipoIngreso>=['egreso','ingreso']
  ngOnInit(): void {
    console.log(this.data);

  }
  submit(formulario:any)
  {console.log(formulario,formulario.valid);

    if (formulario.valid)
    {

      let inEg = new IngresoEgreso(formulario.value.desc, formulario.value.monto, formulario.value.tipo)

      this.dialogRef.close({ ...inEg,"id":this.data.item.id })
    }
    return ''
  }
  cancel() {
    this.dialogRef.close(false)
  }
    }




