import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) {
    console.log('Spotify Service Ready!');
  }
  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`

    //Authorization Token from Spotify (Need to be change if expired)
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBeep7dtM_uUOuwEHa5Xe1ByqCUhUVC19B9E1Qt9pW-KTQGzj1y-sGqKVmhjnXpIEmahmUfGYM8VzxKjcBnWCUvjBTtdtH3Zs4Hk8dhEvtFojbu9yR2JIiAxLVnxXykIHB-R2fj2BP'
    })

    return this.http.get(URL, { headers })
  }

  //Retrieve new release album
  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items))

  }

  //Retrieve list of artist
  getArtists(words: string) {

    return this.getQuery(`search?q=${words}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items
      ))
  }
  //Retrieve searched artist
  getArtist(id: string) {

    return this.getQuery(`artists/${id}`)
    //.pipe(map(data => data['artist'].items))
  }

  //Retrieve top track
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=my`)
      .pipe(map(data => data['tracks']))
  }
}