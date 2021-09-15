module.exports = {
    ensureAuth:function(req,res,next){
        if(req.isAuthenticated()){
            return next()
        }else{
            return res.redirect('/signin')
        }

    },
    ensureGuest:function(req,res,next){
        if(req.isAuthenticated()){
            return res.redirect('/posts')
        }else{
            return next()
            
        }

    }
}