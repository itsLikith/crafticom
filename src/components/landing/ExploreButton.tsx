'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { SquareArrowOutUpRightIcon } from 'lucide-react';

export default function ExploreButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/auth/login');
  };
  return (
    <Button variant="secondary" onClick={handleClick}>
      Explore
      <SquareArrowOutUpRightIcon size={18} color="black" />
    </Button>
  );
}
