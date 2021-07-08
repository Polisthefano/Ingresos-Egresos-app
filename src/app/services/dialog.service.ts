import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog,private router:Router) { }

  openDialog(msg:string,value:boolean){

  const dialogRef= this.dialog.open(SnackBarComponent,{
      width: '300px',
    data:{msg:msg,value:value}
    });
    setTimeout(() => {
      dialogRef.close()
   }, 1800);
   if(value)
    {
      dialogRef.afterClosed().subscribe(resp=>{
        this.router.navigateByUrl('/')
      })
    }
  }
}
