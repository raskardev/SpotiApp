import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino = '';

  constructor(public spotifyService: SpotifyService) { }

  ngOnInit() { }

  buscarArtista() {
    this.spotifyService.getArtistas(this.termino).subscribe();
  }

}
