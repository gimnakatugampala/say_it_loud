const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/User')


module.exports = function(passport){
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback"
      },
    async (accessToken,refreshToken,profile,done) => {
        const newUser = {
            facebookId:profile.id,
            displayName:profile.name,
            firstName:profile.first_name,
            lastName:profile.last_name,
            image:profile.profile_pic

        }

        try{
            let user = await User.findOne({facebookId:profile.id})

            if(user){
                done(null,user)
            }else{
                user  = await User.create(newUser)
                done(null,user)
            }

        }catch(err){

            console.error(err)

        }


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