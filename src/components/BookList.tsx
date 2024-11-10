import React, { useState, useEffect } from 'react';

interface Book {
  id: number;
  name: string;
  score: number;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // API'den kitap verilerini al
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.name} - Score: {book.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
