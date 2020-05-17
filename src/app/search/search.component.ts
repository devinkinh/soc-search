import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { UniversityDialogComponent } from '../university-dialog/university-dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public hasSearchResults;
  public matchedUniversities;
  unis: AngularFirestoreCollection;
  
  search = new FormGroup({
    query: new FormControl('')
  });

  @Output() queryTerm:EventEmitter<any> = new EventEmitter<any>();

  constructor(firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.hasSearchResults = false;
  }

 

  searchUnis(queryTerm) {
    this.queryTerm.emit(queryTerm);
  }

}
