import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-university-dialog',
  templateUrl: './university-dialog.component.html',
  styleUrls: ['./university-dialog.component.css']
})
export class UniversityDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UniversityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  backdropClick():void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }


}
