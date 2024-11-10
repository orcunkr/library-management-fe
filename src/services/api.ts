import axios from 'axios';
import { UserDetails } from '../types/User';

const API_URL = 'http://localhost:3000';  // API URL

// Kitapları Getirme
export const fetchBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};

// Kullanıcıları Getirme
export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
  
};
export const fetchUserDetails = async (id: string): Promise<UserDetails> => {
  const response = await axios.get<UserDetails>(`http://localhost:3000/users/${id}`);
  return response.data;
};

// export const fetchBooksForUser = async (userId: string) => {
//   const response = await axios.get(`${API_URL}/users/${userId}/books`);
//   return response.data;  
// };