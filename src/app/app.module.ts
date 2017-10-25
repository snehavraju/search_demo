import { Http, HttpModule } from '@angular/http';
import { SearchService } from './search.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule
    
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
