import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading: boolean;

  //Function to search artist if user type any words(artist) in search page
  constructor(public spoty: SpotifyService) { }
    search(words: string) {
      this.loading = true
      this.spoty.getArtists(words).subscribe((data: any) => {
        console.log(data);
        this.artists = data
        this.loading = false
      })
    
   }

  ngOnInit(): void {}
}



