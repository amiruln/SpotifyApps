import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Import Routes
import { ROUTES } from './app-routing.module';

//Import Pipes
import { NoimgPipe } from './pipes/noimg.pipe';
import { DomSafePipe } from './pipes/dom-safe.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    CardsComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    LoadingComponent,
    NoimgPipe,
    DomSafePipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
