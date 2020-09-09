// store book objects into array
let library = [];

// the constructor function
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

const submit = document.querySelector('#submit-button');
submit.addEventListener('click', addBookToLibrary);
// append new book objects into library
function addBookToLibrary() {
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newPages = document.getElementById("pages").value;
    let newRead = document.getElementById("read").value;
    library.push(new Book(newTitle, newAuthor, newPages, newRead));
    document.getElementById("form-popup").style.display = "none";
    displayLibrary(library);
}

const container = document.querySelector('#container');
// loops through the array and displays each book on the page
function displayLibrary(arr) {
    container.innerHTML = '';
    arr.forEach((book) => {
        let div = document.createElement('div');
        div.dataset.index = library.indexOf(book);
        div.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>${book.pages}
         pages</p><p>${book.read}</p>`;
        // Add a button on each book’s display to remove the book from the library
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        div.appendChild(removeButton);
        container.appendChild(div);
        removeButton.addEventListener('click', function() {
            library.splice(div.index, 1);
            removeButton.parentElement.remove();
        })
    });
};

function openForm() {
    document.getElementById("form-popup").style.display = "block";
}

// brings up a form allowing users to input the details for the new book
document.getElementById('new-book-button').addEventListener('click', () => {
    openForm()
})

