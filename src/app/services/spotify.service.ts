import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumDetailsUrl: string;


  constructor(private http: Http) { }


  searchMusic(str: string, type='artist'){
    this.searchUrl='https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this.http.get(this.searchUrl)
      .map( res => res.json());
  }

  getArtist(id: string){
    this.artistUrl= 'https://api.spotify.com/v1/artists/' + id;
    return this.http.get(this.artistUrl)
      .map( res => res.json());

  }

  getAlbums(artistId: string){
    this.albumsUrl= 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    return this.http.get(this.albumsUrl)
      .map( res => res.json());
  }


  getAlbumDetails(albumId: string){
    this.albumDetailsUrl = 'https://api.spotify.com/v1/albums/' + albumId ;
    return this.http.get(this.albumDetailsUrl)
      .map(res => res.json())

  }

}
