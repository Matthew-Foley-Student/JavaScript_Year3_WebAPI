import { Component, Input } from '@angular/core';
import { Artist } from '../app/models/artists.model';
import { MusicServiceService } from '../app/service/music-service.service';
import { Album } from '../app/models/albums.model';

@Component({
  selector: 'app-list-albums',
  imports: [],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css',
})

export class ListAlbums {
  constructor(private service: MusicServiceService) { }
  @Input() artist: Artist;
  selectedAlbum: Album | null = null
  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
}
