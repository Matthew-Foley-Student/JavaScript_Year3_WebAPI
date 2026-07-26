import { Component, OnInit } from '@angular/core';
import { BibleService } from '../services/bible';
import { Note } from '../models/note';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-delete-notes',
  templateUrl: './delete-notes.html',
  imports: [NgFor],
  styleUrls: ['./delete-notes.css']
})
export class DeleteNotes implements OnInit {
  notes: Note[] = [];
  constructor(private bibleService: BibleService) { }
  ngOnInit(): void {
    this.bibleService.getNotes().subscribe(data => this.notes = data);
  }
  deleteNote(id: number) {
    this.bibleService.deleteNotes(id).subscribe(() => {
      this.notes = this.notes.filter(n => n.id !== id);
    });
  }
}
