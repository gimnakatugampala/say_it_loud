const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/User')


module.exports = function(passport){
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback"
      },
    async (accessToken,refreshToken,profile,done) => {
       done(null,profile)

    }))

    // Serialize it
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user);
        });
      });


}