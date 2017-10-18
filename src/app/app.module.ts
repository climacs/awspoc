import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }  from './app.component';
import { RestService } from './services/rest.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent ],
  providers: [ RestService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
