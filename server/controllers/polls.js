var mongoose = require('mongoose')
var Poll = mongoose.model('Poll')
var User = mongoose.model('User')

module.exports = {
    index : function(req, res){
        Poll.find({}).populate({
            path : '_user',
            model: 'User',
            })
        .populate({
            path : 'options',
            model : 'Option'
        })
        .exec((err, polls) => {
            if (err){
                return res.json(err)
            }
            return res.json(polls)
        })
    },
    create : function(req, res){
        Poll.create(req.body, function (err, poll) {
            if (err) {
                return res.json(err)
            }
            console.log(poll)
            return res.json(poll)
        })
    },
    delete : function(req, res){
        Poll.findByIdAndRemove(req.params.id, function(err, poll){
            if(err){
                return res.json(err)
            }
            return res.json( { status : 'Deleted'  })
        })
    },
    show : function (req, res){
        Poll.findById(req.params.id, function (err, poll){
            if (err){
                return res.json(err)
            }
            return res.json(poll)
        })}
        

}