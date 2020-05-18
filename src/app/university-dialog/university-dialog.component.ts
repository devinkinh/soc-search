import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  templateUrl: './university-dialog.component.html',
  styleUrls: ['./university-dialog.component.css']
})
export class UniversityDialogComponent {
  fields;
  fieldMapping = {
    ADDR: "Address ",
    ADMINURL: "Admin URL ",
    APPLURL: "Apply URL ",
    ATHURL: "Athlete URL ",
    CARNEGIE: "Carnegie ",
    CHFNM: "Chief ",
    CHFTITLE: "Title ",
    CITY: "City ",
    CNGDSTCD: "CNGDSTCD ",
    COUNTYCD: "County Code ",
    COUNTYNM: "Count Name ",
    DISAURL: "URL ",
    FAIDURL: "Fin. Aid URL ",
    FIPS: "FIPS ",
    IALIAS: "IALIAS ",
    INSTNM: "Name ",
    LATITUDE: "Latitude ",
    LONGITUD: "Longitude ",
    NPRICURL: "NPRI URL ",
    OBEREG: "OBEREG ",
    STABBR: "State Abbr. ",
    UNITID: "ID ",
    VETURL: "Veteran URL ",
    WEBADDR: "Web Address ",
    ZIP: "Zip "
  }
  constructor(public dialogRef: MatDialogRef<UniversityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  backdropClick():void {
    this.dialogRef.close();
  }

}
