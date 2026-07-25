import { Component } from '@angular/core';
import { Artist } from '../app/models/artists.model';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../app/service/music-service.service';


@Component({
  selector: 'app-list-artists',
  imports: [],
  templateUrl: './list-artists.html',
  styleUrl: './list-artists.css',

})

export class ListArtists {
  constructor(private route: ActivatedRoute, private service: MusicServiceService) { }
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];
  ngOnInit() {
    console.log("Getting data");
    this.service.getArtists((artist: Artist[]) => {
      this.artists = artist;
    });
  }
  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }
}

