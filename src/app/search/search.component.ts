import {Component, OnInit,} from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import {Artist} from "./artist";



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }


  searchMusic(){
   this.spotifyService.searchMusic(this.searchStr)
     .subscribe(res => this.searchRes= res.artists.items )
  }
}
