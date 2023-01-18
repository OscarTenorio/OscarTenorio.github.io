import './books.js'                                     // pull in the methods and such from the books.js file

window.addEventListener('load', () => {                 // when page loads, execute createBookList() defined below
    createBookList();
});

async function createBookList() {                       // asyn function, waiting for the fetch promise grabbing the books
    const response = await fetch('./books.json');       // data from the json file
    const json = await response.json();                 // specifically grabs the json formatting from the file
    const books = document.getElementById('books');     // target the div that will generate the HTML we want

    json.books.forEach(book => {
        const element = document.createElement('mit-book');     // contains the custom component we made in books.js, imported up top
        element.book = book;                                    // "set method" from book.js:13 - weird syntax but w.e.
        books.appendChild(element);                             // add it to the page? I think?
    });
};