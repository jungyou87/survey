var mongoose = require('mongoose')

let PollSchema = new mongoose.Schema({
    question : {
        type : String,
        minlength : [8, 'At least 8 characters for Question'],
        required : [true, 'Question cannot be blank']
    },
    options : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Option'
    }],
    
    _user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: [true]
    }

}, {timestamps : true})

mongoose.model('Poll', PollSchema)