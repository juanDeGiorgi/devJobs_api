/* eslint-disable camelcase */
require('dotenv').config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const usersService = require('../services/users');

const opts = {
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  jsonWebTokenOptions: { maxAge: 24 * 60 * 60 },
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  const user = await usersService.getById();
  if (user.email !== jwt_payload.email) {
    done(null, false);
  }

  done(null, user);
}));
