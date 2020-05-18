import { Injectable } from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';
@Injectable({
  providedIn: 'root'
})
export class GetQueryResultsService {

  constructor(public afFunctions: AngularFireFunctions) { }

  // call cloud function that does check against elastic search 
  elasticSearch(queryTerm:string){
    
    const callable = this.afFunctions.httpsCallable('uniQuery');
    const elasticData = callable({ uniQuery: queryTerm });

    return elasticData;
  }
}
