import { Component, OnInit } from '@angular/core';
import { BibleService } from '../services/bible';
import { Verse } from '../models/verse';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-get-verses',
  templateUrl: './get-verses.html',
  imports: [NgFor],
  styleUrls: ['./get-verses.css']
})
export class GetVerses implements OnInit {
  verses: Verse[] = [];
  constructor(private bibleService: BibleService) { }
  ngOnInit(): void {
    this.bibleService.getVerses(1, 1).subscribe(data => this.verses = data);
  }
}
