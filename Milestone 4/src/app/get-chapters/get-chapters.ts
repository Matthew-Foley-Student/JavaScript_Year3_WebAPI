import { Component, OnInit } from '@angular/core';
import { BibleService } from '../services/bible';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-chapters',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './get-chapters.html',
  styleUrls: ['./get-chapters.css']
})
export class GetChapters implements OnInit {
  chapters: any[] = [];
  selectedBookId: number = 1; 

  constructor(private bibleService: BibleService) { }

  ngOnInit() {
    this.bibleService.getChapters(this.selectedBookId).subscribe(
      (data) => {
        this.chapters = data;
      },
      (error) => {
        console.error('Error fetching chapters', error);
      }
    );
  }
}
