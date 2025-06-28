'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Username() {
  type User = {
    name: string;
  };
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get('/api/me', { withCredentials: true });
        setUser(res.data.user);
      } catch (err) {
        console.error('Failed to fetch user:', err);
        setUser(null);
      }
    }
    fetchUser();
  }, []);
  return <>{user?.name}</>;
}
