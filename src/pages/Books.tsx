import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';
import { Book } from '../types/Book';

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    };
    getBooks();
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.name} (Rating: {book.score})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
