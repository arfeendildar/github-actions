const fs = require('fs');
const path = require('path');

const booksFile = path.join(__dirname, '../data/books.json');

// Load books data
function loadBooks() {
    return JSON.parse(fs.readFileSync(booksFile, 'utf-8'));
}

// Save books data
function saveBooks(books) {
    fs.writeFileSync(booksFile, JSON.stringify(books, null, 2));
}

// Lend a book
function lendBook(title, author, borrower, dueDate, category) {
    const books = loadBooks();
    const newBook = {
        id: books.length + 1,
        title,
        author,
        borrower,
        dueDate,
        category
    };
    books.push(newBook);
    saveBooks(books);
    console.log(`Book "${title}" lent to ${borrower}.`);
}

// View borrowed books
function viewBooks(filterBy = null, value = null) {
    let books = loadBooks();
    if (filterBy && value) {
        books = books.filter(book => book[filterBy] === value);
    }
    console.table(books);
}

// Export functions
module.exports = { lendBook, viewBooks };
