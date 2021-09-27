import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private ingresoEgresoService:IngresoEgresoService
    , private dialog: MatDialog, private router: Router) { }

   openDialog(msg:string,success:boolean,login:boolean,edit:boolean,item?:IngresoEgreso){
  const dialogRef= this.dialog.open(SnackBarComponent,{
      width: '300px',
    data:{msg:msg,success:success,editItem:edit,item:item}
  });
    if (!edit)
    {
      setTimeout(() => {
        dialogRef.close()
     }, 1800);
    }
    else {

      dialogRef.afterClosed().subscribe(newItem => {
        if (!newItem) {
          return;
        }

        this.ingresoEgresoService.editItem(newItem).then(resp => {

      this.openDialog(`${item!.descripcion} Fue editado correctamente`,true,false,false)

        }).catch(err => {

          this.openDialog(`No fue posible editar ${item!.descripcion}`, false, false, false)

        });
        setTimeout(() => {
          this.dialog.closeAll()
        }, 1800);
      })

    }

   if(login)
    {
      dialogRef.afterClosed().subscribe(resp=>{
        this.router.navigateByUrl('/')
      })
   }

  return;
   }
}
