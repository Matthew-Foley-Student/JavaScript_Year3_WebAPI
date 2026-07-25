import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListAlbums } from '../list-albums/list-albums';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('musicapp');

  imports: [ListAlbums]

}
