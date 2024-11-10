import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserDetails } from '../services/api';
import { UserDetails as UserDetailsType } from '../types/User';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<UserDetailsType | null>(null);

    useEffect(() => {
        if (id) {
            fetchUserDetails(id).then(setUser);
        }
    }, [id]);

    if (!user) return <p>Yükleniyor...</p>;

    const handleReturnBook = (bookId: string) => {
        // İade işlemi için bir fonksiyon oluşturabilirsiniz
        console.log(`Book with ID ${bookId} returned.`);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {user.name} Detayları
            </Typography>

            <Typography variant="h5" gutterBottom>
                Şu Anda Ödünç Alınan Kitaplar
            </Typography>
            <List>
                {user.borrowedBooks.map((book) => (
                    <ListItem key={book.id}>
                        <ListItemText primary={book.title} />
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => handleReturnBook(book.id)}
                        >
                            İade Et
                        </Button>
                    </ListItem>
                ))}
            </List>

            <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                Geçmişte Ödünç Alınan Kitaplar
            </Typography>
            <List>
                {user.pastBorrowedBooks.map((book) => (
                    <ListItem key={book.id}>
                        <ListItemText 
                            primary={book.title} 
                            secondary={`Puan: ${book.score}`} 
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default UserDetails;
