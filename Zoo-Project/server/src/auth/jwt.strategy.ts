// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { JWT_SECRET } from './auth.const';

// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: JWT_SECRET,
//     });
//   }

//   async Validate(payload: any) {
//     if (payload.exp < Date.now() / 1000) {
//       throw new Error('Token has expired');
//     }

//     return payload;
//   }
// }
