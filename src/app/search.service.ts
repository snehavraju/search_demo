
import { Injectable } from "@angular/core";
import { Http,Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService{
  constructor(private http:Http){

      console.log('Search Service Constructor');
  }
  private searchUrl = "http://localhost:7474/db/data/cypher";
  

  private headers = new Headers({'Content-Type': 'application/json'});

  search(term:string): Observable<any> {
      const url = `${this.searchUrl}${term}`;
      console.log(url);
      return this.http.get(url).map((res:Response)=> res.json() );
  } 

   

  
}