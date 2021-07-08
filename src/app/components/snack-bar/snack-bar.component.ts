import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css'],
})

export class SnackBarComponent implements OnInit {
  constructor(private dialog:MatDialog,
    public dialogRef: MatDialogRef<SnackBarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {} 

  ngOnInit(): void {
  }

    }
  



