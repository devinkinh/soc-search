import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { UniversityDialogComponent } from '../university-dialog/university-dialog.component';

@Component({
  selector: 'app-results-area',
  templateUrl: './results-area.component.html',
  styleUrls: ['./results-area.component.css']
})
export class ResultsAreaComponent implements OnInit {
  private _queryTerm: string;
  matchedUniversities;
  foundUniversities;
  constructor(firestore: AngularFirestore, public dialog: MatDialog) { 
    this.foundUniversities = false;
    console.log(this.foundUniversities)
  }
  
  @Input()
  set queryTerm(queryTerm: string) {
    this._queryTerm = queryTerm;

    console.log(this._queryTerm);
    this.matchedUniversities = [{
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 1
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 2
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 3
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 4
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 1
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 2
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 3
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 4
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 1
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 2
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 3
    },
    {
      INSTNM: 'test a',
      ADDR: 'test b',
      UNITID: 4
    }
    ];

    this.foundUniversities = true;
  }

  displayUniDialog(id){
    console.log(id);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height = '600px';
    dialogConfig.data = {
        id: id,
        title: 'University Details',
    };
    const dialogRef = this.dialog.open(UniversityDialogComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  ngOnInit(): void {
  }

}
