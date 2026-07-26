import { Component } from '@angular/core';
import { BibleService } from '../services/bible';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.html',
  imports: [
    BrowserModule,
    FormsModule 
  ],
  styleUrls: ['./add-notes.css']
})
export class AddNotes {
  noteText: string = '';
  constructor(private bibleService: BibleService) { }
  saveNote() {
    if (this.noteText.trim()) {
      this.bibleService.addNotes({ verse_id: 1, note_text: this.noteText }).subscribe(() => {
        alert('Note added successfully!');
        this.noteText = '';
      });
    }
  }
}
