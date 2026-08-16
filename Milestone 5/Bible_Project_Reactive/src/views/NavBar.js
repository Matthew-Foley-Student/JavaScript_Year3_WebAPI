export function renderNavBar(books, activeBookId, onSelectBook, onHomeClick) {
    const container = document.getElementById('navbar-container');
    container.innerHTML = '';

    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    if (!activeBookId) homeLink.className = 'active';
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        onHomeClick();
    });
    nav.appendChild(homeLink);

    books.forEach(book => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = book.name;
        if (activeBookId === book.id) link.className = 'active';

        link.addEventListener('click', (e) => {
            e.preventDefault();
            onSelectBook(book.id);
        });
        nav.appendChild(link);
    });

    container.appendChild(nav);
}
