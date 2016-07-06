module.exports = function(app){
const Pins=require('../models/pin');
    	
    app.post('/pins',function(req,res){
    	   Pins.create(req.body,function(err){
            if(err){
                return res.status(500).send('Error posting')
            }
            return res.json({pin_added:req.body})
        })

    })	
    app.get('/pins',function(req,res){
    	// Pins.remove({__v:0},function(err){})
    	Pins.find({},function(e,d){
    		if(e){return res.status(500).send(e.message);}
            res.send(d)
    	})
    })

    app.delete('/pins/:id', function(req, res) {
      
      var id = req.params.id;
      Pins.findByIdAndRemove(id, function(e) {
        if (e) {return res.status(500).send( e.message);}
        res.send({ message: 'Pin Deleted' });
      });
    });
}