var mongoose = require('mongoose')

let OptionSchema = new mongoose.Schema({
    option : {
        type : String,
        minlength : [3, 'At least 3 characters for Options'],
        required : [true , "Name cannot be blank"]
    },
    votes : {
        type : Number,
        default : 0
    },
    _poll : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Poll'
    }

})

mongoose.model('Option', OptionSchema)