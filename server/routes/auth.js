module.exports = function(app){
	const passport = require('passport');
	const User=require('../models/user');

   
    app.get('/auth/twitter/callback',
    	passport.authenticate('twitter', { failureRedirect: 'http://localhost:8080/fail'}),
    		function(req,res){
				res.redirect(`/user/${req.user.user.twitter_token}`)
			})

    
    app.get('/auth/twitter',passport.authenticate('twitter'))

}