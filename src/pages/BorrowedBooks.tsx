import React, { useState, useEffect } from 'react';

interface BorrowedBook {
  bookId: number;
  borrowedDate: string;
}

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>([]);

  useEffect(() => {
    // API'den ödünç alınan kitapları al
    fetch('/api/borrowedBooks')
      .then(response => response.json())
      .then(data => setBorrowedBooks(data));
  }, []);

  return (
    <div>
      <h1>Borrowed Books</h1>
      <ul>
        {borrowedBooks.map(book => (
          <li key={book.bookId}>
            Book ID: {book.bookId}, Borrowed on: {book.borrowedDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
