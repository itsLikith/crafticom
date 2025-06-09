import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

const secret = process.env.JWT_SECRET;
if (!secret) throw new Error('JWT_SECRET not set in environment');
const secretKey = new TextEncoder().encode(secret);

export async function signToken(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(secretKey);
}

export async function verifyToken(token: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(token, secretKey);
  return payload;
}
