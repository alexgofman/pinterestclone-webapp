module.exports = function(app){
const User=require('../models/user');
const twitter=require('../secret').twitter

    	
    app.post('/authenticate',function(req,res){
    	User.findOne({'user.twitter_token':req.body.token},function(err,data){
    		
    		if(err){res.send(err)}
    		
    			res.send(data)
    			
    	})
    })	
    app.get('/users',function(req,res){
    	// User.remove({__v:0},function(err){})
    	User.find({},function(e,d){
    		res.send(d)
    	})
    })

    app.get('/user/:token',function(req,res){
    	
    	if(req.user.user.twitter_token==req.params.token)
    	res.redirect('http://localhost:8080/profile/'+req.params.token)
    })

}