import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/models/akjv_verses.json');

export class Verse {
    static getByBook(bookId) {
        const data = fs.readFileSync(filePath, 'utf-8');
        const verses = JSON.parse(data || '[]');
        return verses.filter(v => v.book_id === parseInt(bookId));
    }
}
