import express from 'express';
import path from 'path';
import { Book } from './models/book.js';
import { Verse } from './models/verse.js';
import { Note } from './models/note.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve('src/views')));

// REST API Endpoints
app.get('/api/books', (req, res) => {
    res.json(Book.getAll());
});

app.get('/api/books/:bookId/verses', (req, res) => {
    const verses = Verse.getByBook(req.params.bookId);
    const notes = Note.getAll();

    // Link notes to verses dynamically
    const versesWithNotes = verses.map(verse => ({
        ...verse,
        note: notes.find(n => n.verse_id === verse.id) || null
    }));

    res.json(versesWithNotes);
});

app.post('/api/notes', (req, res) => {
    const { verse_id, note_text } = req.body;
    Note.addOrUpdate(verse_id, note_text);
    res.json({ success: true });
});

app.delete('/api/notes/:verseId', (req, res) => {
    Note.delete(req.params.verseId);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
