let express = require('express')
let bp = require ('body-parser')
let mongoose = require('mongoose')

let app = express()

app.use(bp.json())
app.use(express.static(__dirname+ "/public/dist"));


require('./server/config/mongoose.js')

var routes_setters = require('./server/config/routes.js')
routes_setters(app);

app.listen(8000, function(){
    console.log('------------------------------------');
    console.log('Listening on port 8000...');
    console.log('------------------------------------');
})