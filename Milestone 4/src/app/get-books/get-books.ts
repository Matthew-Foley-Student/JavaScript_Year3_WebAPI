import { Component, OnInit } from '@angular/core';
import { BibleService } from '../services/bible';
import { Book } from '../models/book';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.html',
  imports: [NgFor],
  styleUrls: ['./get-books.css']
})
export class GetBooks implements OnInit {
  books: Book[] = [];
  constructor(private bibleService: BibleService) { }
  ngOnInit(): void {
    this.bibleService.getBooks().subscribe(data => this.books = data);
  }
}
