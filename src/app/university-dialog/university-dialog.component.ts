import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {ChangeDetectorRef} from '@angular/core'

export interface DialogData {
  ADDR: string,
  ADMINURL: string,
  APPLURL: string,
  ATHURL: string,
  CARNEGIE: string,
  CHFNM: string,
  CHFTITLE: string,
  CITY: string,
  CNGDSTCD: string,
  COUNTYCD: string,
  COUNTYNM: string,
  DISAURL: string,
  FAIDURL: string,
  FIPS: string,
  IALIAS: string,
  INSTNM: string,
  LATITUDE: string,
  LONGITUD: string,
  NPRICURL: string,
  OBEREG: string,
  STABBR: string,
  UNITID: string
  VETURL: string,
  WEBADDR: string,
  ZIP: string
}
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
  cat = "helloworld";
  constructor(public dialogRef: MatDialogRef<UniversityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) {
      console.log(this.cat);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  backdropClick():void {
    this.dialogRef.close();
  }

}
