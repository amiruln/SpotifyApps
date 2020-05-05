import { Routes } from '@angular/router'
import { HomeComponent } from '././components/home/home.component';
import { AboutComponent } from '././components/about/about.component';

import { SearchComponent } from '././components/search/search.component';
import { ArtistComponent } from '././components/artist/artist.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]