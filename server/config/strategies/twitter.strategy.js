const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const twitter = require("../../secret").twitter;
const User = require('../../models/user');

module.exports = function() {
  passport.use(new TwitterStrategy({
    consumerKey: twitter.Key,
    consumerSecret: twitter.Secret,
    callbackURL: twitter.cb,
    passReqToCallback: true
  },
  function(req, token, tokenSecret, profile, done) {
    User.findOne({'user.twitter_id': profile.id}, function(error, user) {
      if (user) {
        done(null, user);
      }
      else {
        const newUser = new User;
        newUser.user={};
        newUser.user.image = profile._json.profile_image_url;
        newUser.user.displayName = profile.displayName;
        newUser.user.twitter_id = profile.id;
        newUser.user.twitter_token = token;
        newUser.user.twitter_secret = tokenSecret;
        newUser.save();
        done(null, newUser);
      }
    })
  }
  ))
}