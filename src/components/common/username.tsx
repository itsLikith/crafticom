'use client';

import React, { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function Username() {
  type User = {
    name: string;
  };
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get('/me');
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
