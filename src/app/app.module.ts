import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from './app.movie'
import { About } from './about'
import { RouterModule } from '@angular/router';
//import { HighlightDirective } from './app.highlight.directive';
import { AppComponent }  from './app.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app-routing.module'
import { MovieRoute } from './movieroute'
import { PageDefault } from './PageDefault'

@NgModule({
  declarations: [
    AppComponent, Movie, About, MovieRoute, PageDefault
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, NgxPaginationModule, RouterModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }