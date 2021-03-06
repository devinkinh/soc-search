import { Component, OnInit, Input, OnChanges, NgZone, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { UniversityDialogComponent } from '../university-dialog/university-dialog.component';
import { GetQueryResultsService } from '../get-query-results.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-results-area',
  templateUrl: './results-area.component.html',
  styleUrls: ['./results-area.component.css']
})
export class ResultsAreaComponent implements OnInit, OnChanges {
  pageSizeOptions: number[];
  pageEvent: PageEvent;
  @ViewChild('pager') paginator: MatPaginator;

  cloudData; displayedUnis; uniIndex; length; loading;
  testEmitter$;

  pageIndex = 0;
  pageSize = 10;

  constructor(firestore: AngularFirestore, public dialog: MatDialog,
    public cloud: GetQueryResultsService, private ngZone: NgZone) {
    this.uniIndex = {};
    this.loading = false;
  }
  @Input('queryTerm') queryTerm: string;

  ngOnChanges() {
    this.loading = true;

    // clear out previous search results
    this.uniIndex = {};
    this.cloud.elasticSearch(this.queryTerm).subscribe(res => {
      let n = 0;
      let uniPage = [];
      // subscriptions run outside angular zone for some reason
      this.ngZone.run(() => {
        this.length = res.hits.total.value;
        res.hits.hits.forEach((hit, idx) => {
          uniPage.push(hit._source);
          if ((idx+1) % 10 == 0 && idx != 0) {
            this.uniIndex[n++] = uniPage;
            uniPage = [];
          } else if (idx == this.length -1){
            this.uniIndex[n++] = uniPage;
            uniPage = [];
          }
        });
        this.paginator.firstPage();
        this.loading = false;
      });
    });
  }


  displayUniDialog(data) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    this.dialog.open(UniversityDialogComponent, dialogConfig);

  }
  ngOnInit(): void {
  }

}
