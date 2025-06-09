export interface JWTPayload {
  id: string;
  email: string;
  role: 'craftizen' | 'artisan' | 'admin';
  name: string;
}
