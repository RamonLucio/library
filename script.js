const container = document.querySelector('#container')

// store book objects
let libraryArray = [{title: '1984', author: 'George Orwell', pages: 328, read: 'Read'}];

// the constructor function
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// store new book objects into libraryArray
function addBookToLibrary(title, author, pages, read) {
    libraryArray.push(new Book(title, author, pages, read))
}

// loops through the array and displays each book on the page
function displayLibraryArray() {
    libraryArray.forEach((obj) => {
        let div = document.createElement('div');
        div.innerHTML = `<p>${obj.title}</p><p>${obj.author}</p><p>${obj.pages} pages</p><p>${obj.read}</p>`;
        container.appendChild(div);
    });
};
