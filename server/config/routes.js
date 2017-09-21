var path = require ('path');

var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');
var options = require('../controllers/options.js');

module.exports = function (app) {
    app.post('/user', users.create);

    app.get('/polls', polls.index);
    app.post('/polls', polls.create);
    app.get('/polls/:id', polls.show);
    app.delete('/polls/:id', polls.delete);

    app.post(`/options`, options.create);
    app.put(`/options/:id`, options.update);

    app.all('*', function(req, res){
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
}