import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'soc-search';
  queryTerm;
  populateResultArea(queryTerm){
    console.log(queryTerm);
    this.queryTerm = queryTerm;
  }
  constructor(public firestore: AngularFirestore, private http:HttpClient) {
    // this.items = firestore.collection('test-collection').valueChanges();
  }
}
