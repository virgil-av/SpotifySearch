import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import {ActivatedRoute} from "@angular/router";
import {Album} from "../search/album";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: ['']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album[];
  currentTrack;
  isToggled;
  activeId:number;

  constructor(private spotifyService: SpotifyService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe(
        id => {
          this.spotifyService.getAlbumDetails(id)
            .subscribe(res => this.album = res)
        }
      )

  }



}
