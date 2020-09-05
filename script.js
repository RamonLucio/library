const container = document.querySelector('#container')

// store book objects into array
let library = [{title: '1984', 
author: 'George Orwell', 
pages: 328, 
read: 'Read'}];

// the constructor function
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// append new book objects into library
function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}

// loops through the array and displays each book on the page
function displayLibrary(library) {
    library.forEach((book) => {
        let div = document.createElement('div');
        div.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>${book.pages}
         pages</p><p>${book.read}</p>`; 
        container.appendChild(div);
    });
};

function openForm() {
    document.getElementById("form-popup").style.display = "block";
}

// brings up a form allowing users to input the details for the new book
document.getElementById('new-book-button').addEventListener('click', () => {
    openForm()
})