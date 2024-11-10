export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export interface UserDetails extends User {
    borrowedBooks: { id: string; title: string }[];
    pastBorrowedBooks: { id: string; title: string; score: number }[];
}