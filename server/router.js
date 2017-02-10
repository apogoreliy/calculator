const DB = require('./db');

module.exports = (app) =>{
    app.post('/auth', (req, res) => {
        DB.auth(req.body.type, req.body.login, req.body.password)
            .then(response => {
                if(response.errorData) {
                    res.send({error: 'You must provide email and password'});
                }
                else if(response.userUnexist || response.errorToken){
                    res.send({error: 'Wrong login or password'});
                }
                else if(response.userExist){
                    res.send({error: 'Email is in use'});
                }
                else if(response.token){
                    res.json(response);
                }
            })
            .catch(err => {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/check_auth', (req, res) => {
        DB.checkAuth(req.body.token)
            .then(response => {
                if(response.errorToken) {
                    res.send(false);
                }
                else if(response.loggedIn){
                    res.send(true);
                }
            })
            .catch(err => {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/get_places', (req, res) => {
        DB.getPlaces(req.body.token).then(function(items) {
            res.json(items);
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/add_place', (req, res) => {
        DB.addPlace(req.body.token, req.body.place).then(function(item) {
                res.json(item);
            })
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/edit_place', (req) => {
        DB.editPlace(req.body.placeId, req.body.place).catch(function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/remove_place', (req) => {
        DB.removePlace(req.body.token, req.body.place).catch(function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });
};
