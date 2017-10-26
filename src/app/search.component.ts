import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  

  private result:any;

       constructor(
        private searchService: SearchService,
       ){
      
    }
    
    search(term:string){
      return this.searchService.search(term)
      .subscribe(result => {
          this.result = result;
          console.log(result);
      });
  }
}
