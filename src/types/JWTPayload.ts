import { JWTPayload as JoseJWTPayload } from 'jose';

export interface JWTPayload extends JoseJWTPayload {
  id: string;
  email: string;
  role: 'craftizen' | 'artisan' | 'admin';
  username: string;
}
