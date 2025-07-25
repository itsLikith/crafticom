'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type User = {
  name: string;
  profilePic?: string;
};

export default function ProfilePic() {
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

  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage
          src={user?.profilePic || '/defaultpfp.png'}
          alt={user?.name || 'profile image'}
        />
        <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
      </Avatar>
    </div>
  );
}
