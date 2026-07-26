import { Component, OnInit } from '@angular/core';
import { BibleService } from '../services/bible';
import { Note } from '../models/note';
import { DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-get-notes',
  imports: [DatePipe,NgFor],
  templateUrl: './get-notes.html',
  styleUrls: ['./get-notes.css']

})
export class GetNotes implements OnInit {
  notes: Note[] = [];
  constructor(private bibleService: BibleService) { }
  ngOnInit(): void {
    this.bibleService.getNotes().subscribe(data => this.notes = data);
  }
}
