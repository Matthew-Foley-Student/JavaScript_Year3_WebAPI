import { renderNavBar } from './NavBar.js';
import { renderCard } from './Card.js';

let books = [];
let currentBookId = null;

async function init() {
    const res = await fetch('/api/books');
    books = await res.json();
    showHome();
}

function showHome() {
    currentBookId = null;
    renderNavBar(books, currentBookId, loadBook, showHome);
    const content = document.getElementById('app-content');
    content.innerHTML = `
    <div class="container">
      <h1>Welcome to Bible Project Reactive</h1>
      <p>Please select a book from the navigation bar above to view chapters, verses, and manage your personal notes.</p>
    </div>
  `;
}

async function loadBook(bookId) {
    currentBookId = bookId;
    renderNavBar(books, currentBookId, loadBook, showHome);

    const content = document.getElementById('app-content');
    content.innerHTML = '<div class="container"><h2>Loading verses...</h2></div>';

    const res = await fetch(`/api/books/${bookId}/verses`);
    const verses = await res.json();

    const container = document.createElement('div');
    container.className = 'container';

    const header = document.createElement('h2');
    header.textContent = books.find(b => b.id === bookId).name;
    container.appendChild(header);

    verses.forEach(verse => {
        const cardElement = renderCard(verse, handleSaveNote, handleDeleteNote);
        container.appendChild(cardElement);
    });

    content.innerHTML = '';
    content.appendChild(container);
}

async function handleSaveNote(verseId, text) {
    await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verse_id: verseId, note_text: text })
    });
    loadBook(currentBookId);
}

async function handleDeleteNote(verseId) {
    await fetch(`/api/notes/${verseId}`, { method: 'DELETE' });
    loadBook(currentBookId);
}

init();
