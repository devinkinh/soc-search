import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { UniversityDialogComponent } from '../university-dialog/university-dialog.component';
import { GetQueryResultsService } from '../get-query-results.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-results-area',
  templateUrl: './results-area.component.html',
  styleUrls: ['./results-area.component.css']
})
export class ResultsAreaComponent implements OnInit {
  private _queryTerm: string;
  cloudData;
  displayedUnis;
  uniIndex;
  pageSizeOptions: number[];
  pageEvent: PageEvent;
  pageIndex=0;
  length;
  pageSize = 10;

  constructor(firestore: AngularFirestore, public dialog: MatDialog, public cloud: GetQueryResultsService) {
    this.uniIndex= {};
    console.log("get service??");
  }
  get queryTerm () {
    return this._queryTerm;
  }
  @Input()
  set queryTerm(queryTerm: string) {
    this._queryTerm = queryTerm;

    this.cloud.elasticSearch(queryTerm).subscribe(res => {
      let n = 0;
      let uniPage =[];
      console.log(res);
      this.length = res.hits.total.value;
      console.log(this.length);
      res.hits.hits.forEach((hit,idx) => {
        uniPage.push(hit._source);
        if((idx+1)%10 == 0){
          this.uniIndex[n++] = uniPage;
          uniPage = [];
        }
      });
      console.log(this.uniIndex);
    });

  }

  displayUniDialog(data) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.height = '600px';
    dialogConfig.data = data;

    this.dialog.open(UniversityDialogComponent, dialogConfig);

  }
  ngOnInit(): void {
    console.log("I am init")
  }

}
