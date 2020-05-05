import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = []
  artists: any[] = [];
  loading: boolean;
  error: boolean = false;
  messageErr: string;

  //Function to retrieve the new realease on home page
  constructor(public spoty: SpotifyService) {
    this.loading = true
    this.spoty.getNewReleases().subscribe((data: any) => {
      this.newReleases = data
      this.loading = false
  //Retrieve error message 
    }, (errorService) => {
      this.error = true;
      this.loading = false
      this.messageErr = errorService.error.error.message;
    });
   }

  ngOnInit(): void {
  }

}
