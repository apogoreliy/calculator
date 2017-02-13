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

    app.post('/get_clients', (req, res) => {
        DB.getClients(req.body.token).then(function(items) {
            res.json(items);
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/add_client', (req, res) => {
        DB.addClient(req.body.token, req.body.client).then(function(item) {
            res.json(item);
        })
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/edit_client', (req) => {
        DB.editClient(req.body.clientId, req.body.client).catch(function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/remove_client', (req) => {
        DB.removeClient(req.body.token, req.body.client).catch(function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/get_workers', (req, res) => {
        DB.getWorkers(req.body.token)
            .then(function(items) {
                res.json(items);
            })
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/add_worker', (req, res) => {
        DB.addWorker(req.body.token, req.body.worker)
            .then(function(item) {
                res.json(item);
            })
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/edit_worker', (req) => {
        DB.editWorker(req.body.workerId, req.body.worker)
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/remove_worker', (req) => {
        DB.removeWorker(req.body.token, req.body.worker)
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/get_jobs', (req, res) => {
        DB.getJobs(req.body.token)
            .then(function(items) {
                res.json(items);
            })
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/add_job', (req, res) => {
        DB.addJob(req.body.token, req.body.job)
            .then(function(item) {
                res.json(item);
            })
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/edit_job', (req) => {
        DB.editJob(req.body.jobId, req.body.job)
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/remove_job', (req) => {
        DB.removeJob(req.body.token, req.body.job)
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/get_costs', (req, res) => {
        DB.getCosts(req.body.token)
            .then(function(items) {
                res.json(items);
            })
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/add_cost', (req, res) => {
        DB.addCost(req.body.token, req.body.cost)
            .then(function(item) {
                res.json(item);
            })
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/edit_cost', (req) => {
        DB.editCost(req.body.costId, req.body.cost)
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/remove_cost', (req) => {
        DB.removeCost(req.body.token, req.body.cost)
            .catch(function(err) {
                console.error('The promise was rejected', err, err.stack);
            });
    });
};
