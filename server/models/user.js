var mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Name cannot be blank"]
    },
    polls : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Poll'
    }]
})

mongoose.model('User', UserSchema)