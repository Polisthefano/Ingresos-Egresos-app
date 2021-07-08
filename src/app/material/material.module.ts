import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MaterialModule 
  ],
  exports:[
  ]
})
export class MaterialModule { }
