const { lendBook, viewBooks } = require('./src/events');

// Test lending a book
lendBook("1984", "George Orwell", "Alice", "2024-08-10", "Fiction");

// Test viewing books
viewBooks();
