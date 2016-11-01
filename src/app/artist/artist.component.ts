import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Artist} from "../search/artist";
import {Album} from "../search/album";
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums:Album[];


  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe(
        id => {
          this.spotifyService.getArtist(id)
            .subscribe(artist => this.artist = artist);

          this.spotifyService.getAlbums(id)
            .subscribe(albums => this.albums = albums.items)
        }
      )
    // you can double subscribe to the params in the same place
    // or you can make a variable and call them outside

  }

}
