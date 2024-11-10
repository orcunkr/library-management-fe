import React, { useState } from 'react';

const BookForm = () => {
  const [bookName, setBookName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submit işlemleri
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={bookName} 
        onChange={(e) => setBookName(e.target.value)} 
        placeholder="Enter book name" 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
