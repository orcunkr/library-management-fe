import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserDetails } from '../services/api';
import { UserDetails as UserDetailsType } from '../types/User';

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<UserDetailsType | null>(null);

    useEffect(() => {
        if (id) {
            fetchUserDetails(id).then(setUser);
        }
    }, [id]);

    if (!user) return <p>Yükleniyor...</p>;

    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.id}</h2>
        </div>
    );
};

export default UserDetails;
