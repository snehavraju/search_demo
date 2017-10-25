import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
