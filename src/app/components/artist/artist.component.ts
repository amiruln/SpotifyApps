import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  // watch the current URL 
  show: boolean;
  artist: any = {};
  topTracks: any = []

  constructor(public activatedRoute: ActivatedRoute, public spoty: SpotifyService) {
    this.show = true
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id'])
      this.getTopTracks(params['id'])
    })
   }

  ngOnInit(): void {
  }
  //Function to show artist that has been search
  getArtist(id: string) {

    this.spoty.getArtist(id).subscribe(artist => {
      this.artist = artist
      this.show = false
      console.log(artist);
    })
  }

  //Function to show top tracks
  getTopTracks(id: string) {
    this.spoty.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks
      console.log(topTracks);
    })
  }

}
