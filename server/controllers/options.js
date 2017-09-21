var mongoose = require('mongoose')
var Option = mongoose.model('Option')
var Poll = mongoose.model('Poll')

module.exports = {
    create : function(req, res){
        Option.create(req.body, function (err, option) {
            if (err) {
                return res.json(err)
            }
            Poll.findByIdAndUpdate(req.body._poll, 
            { $push : { options : option._id }},
            { new : true} , function (err, option) {
                if (err){
                    return res.json(err)
                }
                return res.json(option)
            })
        })
    },
    update : function(req, res){
        Option.findByIdAndUpdate(req.params.id,
            { $inc : { votes : 1}},
            {new : true}, function (err, option){
                if(err){
                    return res.json(err)
                }
                return res.json(option)
            }
        )
        
    }
}