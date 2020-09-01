let bookshelfArray = [{title: '1984', author: 'George Orwell', pages: 328, read: 'Read'}];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    bookshelfArray.push(new Book(title, author, pages, read))
}
