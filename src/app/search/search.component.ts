import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  search = new FormGroup({
    query: new FormControl('')
  });

  @Output() queryTerm:EventEmitter<any> = new EventEmitter<any>();

  constructor(firestore: AngularFirestore) {
  }

  ngOnInit() {
  }

  searchUnis(queryTerm) {
    this.queryTerm.emit(queryTerm);
  }

}
