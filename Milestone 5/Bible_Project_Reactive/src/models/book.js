import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/models/akjv_books.json');

export class Book {
    static getAll() {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data || '[]');
    }
}
