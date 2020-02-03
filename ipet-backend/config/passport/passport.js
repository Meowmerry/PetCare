const env = process.env.NODE_ENV || 'development'
const config = require('../config.json')[env];

const bcrypt = require("bcryptjs");
const BCRYPT_SALT_ROUNDS = config.salt_length;
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const db = require("../../models");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

let jwtOptions = {};
jwtOptions.secretOrKey = "1p3t";

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    (email, password, done) => {
      db.user
        .findOne({
          where: { email: email }
        })
        .then(user => {
          // done(error, user, info)
          if (user !== null) {
            console.log("email already taken");
            return done(null, false, { message: "email already taken" });
          } else {
            let salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
            let hashedPassword = bcrypt.hashSync(password, salt);
            db.user.create({
              email,
              password: hashedPassword
            })
              .then(user => {
                console.log("user created");


                return done(null, user);
              })
              .catch(err => {
                console.error(err);
                done(err);
              });
          }
        });
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    async (email, password, done) => {
      let user = await db.user.findOne({ where: { email } });
      if (user === null) {
        return done(null, false, {
          message: "email or password is incorrect."
        });
      }
      bcrypt.compare(password, user.password, function (err, response) {
        if (err) {
          console.error(err);
          done(err);
        }
        if (!response) {
          return done(null, false, {
            message: "email or password is incorrect."
          });
        }
        console.log(`user ${user.email} is found  & authenticated`);
        return done(null, user);
      });
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtOptions.secretOrKey
};

passport.use(
  "jwt",
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log({ jwt_payload });
    db.user.findOne({ where: { id: jwt_payload.id } }).then(user => {
      if (user) {
        console.log("user found");
        return done(null, user);
      } else {
        console.log("user is not found");
        return done(null, false);
      }
    }).catch(err => {
      console.log(err)
    })
  })
);

module.exports = { jwtOptions, BCRYPT_SALT_ROUNDS };