export function renderCard(verse, onSaveNote, onDeleteNote) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
    <h3>Chapter ${verse.chapter}, Verse ${verse.verse}</h3>
    <p>${verse.text}</p>
    <div class="note-section">
      ${verse.note ? `
        <div class="note-box">
          <strong>Note:</strong> ${verse.note.note_text}
          <br><small style="color:gray;">Updated: ${new Date(verse.note.created_at).toLocaleString()}</small>
        </div>
      ` : ''}
    </div>
    <div class="btn-group"></div>
  `;

    const btnGroup = card.querySelector('.btn-group');

    if (!verse.note) {
        const addBtn = document.createElement('button');
        addBtn.className = 'btn-add';
        addBtn.textContent = 'Add Note';
        addBtn.onclick = () => {
            const txt = prompt('Enter your note:');
            if (txt) onSaveNote(verse.id, txt);
        };
        btnGroup.appendChild(addBtn);
    } else {
        const editBtn = document.createElement('button');
        editBtn.className = 'btn-edit';
        editBtn.textContent = 'Edit Note';
        editBtn.onclick = () => {
            const txt = prompt('Edit your note:', verse.note.note_text);
            if (txt) onSaveNote(verse.id, txt);
        };

        const delBtn = document.createElement('button');
        delBtn.className = 'btn-delete';
        delBtn.textContent = 'Delete Note';
        delBtn.onclick = () => {
            if (confirm('Delete this note?')) onDeleteNote(verse.id);
        };

        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(delBtn);
    }

    return card;
}
