import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/models/akjv_notes.json');

export class Note {
    static getAll() {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data || '[]');
    }

    static saveAll(notes) {
        fs.writeFileSync(filePath, JSON.stringify(notes, null, 2), 'utf-8');
    }

    static getByVerse(verseId) {
        const notes = this.getAll();
        return notes.find(n => n.verse_id === parseInt(verseId)) || null;
    }

    static addOrUpdate(verseId, text) {
        const notes = this.getAll();
        const existingIndex = notes.findIndex(n => n.verse_id === parseInt(verseId));

        if (existingIndex !== -1) {
            notes[existingIndex].note_text = text;
            notes[existingIndex].created_at = new Date().toISOString();
        } else {
            const newNote = {
                id: notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1,
                verse_id: parseInt(verseId),
                note_text: text,
                created_at: new Date().toISOString()
            };
            notes.push(newNote);
        }
        this.saveAll(notes);
    }

    static delete(verseId) {
        let notes = this.getAll();
        notes = notes.filter(n => n.verse_id !== parseInt(verseId));
        this.saveAll(notes);
    }
}
