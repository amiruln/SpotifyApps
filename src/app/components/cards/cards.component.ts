import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];


  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  //Function to show list of artist that has been search
  seeArtist(item: any) {
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id
    } else {
      artistId = item.artists[0].id
    }
    this.router.navigate(['/artist', artistId])
  }

}
