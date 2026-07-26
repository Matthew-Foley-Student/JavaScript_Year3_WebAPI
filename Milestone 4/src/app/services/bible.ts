import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Note } from '../models/note';
import { Verse } from '../models/verse';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  private apiUrl = 'http://localhost:8888/phpMyAdmin5/index.php?route=/sql&db=bible_verses&table=akjv_verses&pos=0'; // Replace with your REST API URL

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getChapters(bookId: number): Observable<number[]> {
    // Assuming backend endpoint returns chapters for a book
    return this.http.get<number[]>(`${this.apiUrl}/chapters?bookId=${bookId}`);
  }

  getVerses(bookId: number, chapter: number): Observable<Verse[]> {
    return this.http.get<Verse[]>(`${this.apiUrl}/verses?bookId=${bookId}&chapter=${chapter}`);
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  addNotes(note: Omit<Note, 'id' | 'created_at'>): Observable<Note> {
    return this.http.post<Note>(`${this.apiUrl}/notes`, note);
  }

  deleteNotes(noteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/notes/${noteId}`);
  }
}
