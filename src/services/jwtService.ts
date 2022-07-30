import jwt, { JwtPayload } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const secret = 'secret4231';

const jwtService = {
  createToken: (data: { username: string, classe: string }) => {
    const token = jwt.sign({ data }, secret);

    return token;
  },

  decodeToken: (token: string): JwtPayload | null => (
    jwt.decode(token, { json: true })),

  validateToken: (token: string) => {
    if (!token) {
      const err = new Error('Token not found');
      err.name = 'UnauthorizedError';
      throw err;
    }

    try {
      return jwt.verify(token, secret);
    } catch (err: any) {
      err.message = 'Expired or invalid token';
      err.name = 'UnauthorizedError';
      throw err;
    }
  },
};

export default jwtService;