// Connecting MongoDB
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('./config');
const URL = config.URL;
const Promise = require('rsvp').Promise;
const jwt = require('jwt-simple');

module.exports = {
    connection : function() {
        return new Promise(function(resolve, reject) {
            MongoClient.connect(URL, function(err, db) {
                err ? reject(err) : resolve(db);
            });
        })
    },

    getUserByToken : function(token){
        return jwt.decode(token, config.secret);
    },

    getTokenForUser: function(login, password, id) {
        return jwt.encode({ password, login, id }, config.secret);
    },

    checkIfUserExists: function(collection, login){
        return new Promise(function(resolve, reject) {
            collection.find({login}, {token : 1}).limit(1).next(function(err, user){
                if(err) { reject(err) }
                resolve(user);
            });
        });
    },

    auth : function (type, login, password) {
        const that =this;
        return new Promise(function(resolve, reject) {
            if (!login || !password) resolve({errorData : true});

            let token = that.getTokenForUser(login, password);
            that.connection().then(function(db) {
                const collection = db.collection('user');
                that.checkIfUserExists(collection, login).then(function(user){
                    if(user && type === 'signUp'){
                        resolve({userExist : true});
                    }
                    else if(!user && type === 'signUp'){
                        collection.insertOne({login, token}, function (err, res) {
                            token = that.getTokenForUser(login, password, res.ops[0]['_id']);
                            err ? reject(err) : resolve({token});
                        });
                    }
                    else if(user && type === 'signIn'){
                        let userInfo = that.getUserByToken(user.token);
                        token = that.getTokenForUser(login, password, user['_id']);
                        resolve(userInfo.login !== login || userInfo.password !== password ? {errorToken: true} : {token});
                    }
                    else if(!user && type === 'signIn'){
                        resolve({userUnexist : true});
                    }
                });
            });
        });
    },

    checkAuth : function(token){
        const that =this;
        return new Promise(function(resolve, reject) {
            if (!token) resolve({errorToken : true});

            that.connection().then(function(db) {
                let login = that.getUserByToken(token)['login'];
                db.collection('user').find({login}, {login : 1, _id : 0}).limit(1).next(function(err, user){
                    if(err) { reject(err) }
                    resolve(!user ? {errorToken : true} : {loggedIn : true});
                });
            });
        });
    },

    getPlaces: function(token, filter){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('places');
                let userId = that.getUserByToken(token)['id'];
                let search = filter ? {userId, name: { $regex : `${filter}`, $options: 'i'}} : {userId};

                collection.find(search, {userId:0}).toArray(function(err, items) {
                    if(err) {
                        reject(err)
                    }
                    else{
                        let places = [];
                        for(let i in items){
                            items[i].place._id = items[i]._id;
                            places.push(items[i].place);
                        }
                        resolve(places);
                    }
                });
            });
        });
    },

    addPlace: function(token, place){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                let userId = that.getUserByToken(token)['id'];
                db.collection('places').insertOne(
                    {place, userId},
                    function(err, item) {
                        if(err) {reject(item)}
                        else{
                            place._id = item.ops[0]._id;
                            resolve({place});
                        }
                    }
                );
            });
        });
    },

    editPlace: function(placeId, place){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('places').updateOne({_id : ObjectID(placeId)}, {$set: {place}}, function(err) {if(err) reject(err);});
            });
        });
    },

    removePlace : function(token, place){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('places').deleteOne({_id : ObjectID(place)}, function(err) {
                    if(err) reject(err);
                });
            });
        });
    },

    getClients: function(token, filter){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('clients');
                let userId = that.getUserByToken(token)['id'];
                let search = filter ? {userId, name: { $regex : `${filter}`, $options: 'i'}} : {userId};

                collection.find(search, {userId:0}).toArray(function(err, items) {
                    if(err) {
                        reject(err)
                    }
                    else{
                        let clients = [];
                        for(let i in items){
                            items[i].client._id = items[i]._id;
                            clients.push(items[i].client);
                        }
                        resolve(clients);
                    }
                });
            });
        });
    },

    addClient: function(token, client){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                let userId = that.getUserByToken(token)['id'];
                db.collection('clients').insertOne(
                    {client, userId},
                    function(err, item) {
                        if(err) {reject(item)}
                        else{
                            client._id = item.ops[0]._id;
                            resolve({client});
                        }
                    }
                );
            });
        });
    },

    editClient: function(clientId, client){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('clients').updateOne({_id : ObjectID(clientId)}, {$set: {client}}, function(err) {if(err) reject(err);});
            });
        });
    },

    removeClient : function(token, client){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('clients').deleteOne({_id : ObjectID(client)}, function(err) {
                    if(err) reject(err);
                });
            });
        });
    },

    getWorkers: function(token, filter){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                let userId = that.getUserByToken(token)['id'];
                let search = filter ? {userId, name: { $regex : `${filter}`, $options: 'i'}} : {userId};

                db.collection('workers').find(search, {userId:0}).toArray(function(err, items) {
                    if(err) {
                        reject(err)
                    }
                    else{
                        let workers = [];
                        for(let i in items){
                            items[i].worker._id = items[i]._id;
                            workers.push(items[i].worker);
                        }
                        resolve(workers);
                    }
                });
            });
        });
    },

    addWorker: function(token, worker){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                let userId = that.getUserByToken(token)['id'];
                db.collection('workers').insertOne(
                    {worker, userId},
                    function(err, item) {
                        if(err) {reject(item)}
                        else{
                            worker._id = item.ops[0]._id;
                            resolve({worker});
                        }
                    }
                );
            });
        });
    },

    editWorker: function(workerId, worker){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('workers').updateOne({_id : ObjectID(workerId)}, {$set: {worker}}, function(err) {if(err) reject(err);});
            });
        });
    },

    removeWorker: function(token, worker){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('workers').deleteOne({_id : ObjectID(worker)}, function(err) {
                    if(err) reject(err);
                });
            });
        });
    },

    getJobs: function(token, filter){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                let userId = that.getUserByToken(token)['id'];
                let search = filter ? {userId, name: { $regex : `${filter}`, $options: 'i'}} : {userId};

                db.collection('jobs').find(search, {userId:0}).toArray(function(err, items) {
                    if(err) {
                        reject(err)
                    }
                    else{
                        let jobs = [];
                        for(let i in items){
                            items[i].job._id = items[i]._id;
                            jobs.push(items[i].job);
                        }
                        resolve(jobs);
                    }
                });
            });
        });
    },

    addJob: function(token, job){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                let userId = that.getUserByToken(token)['id'];
                db.collection('jobs').insertOne(
                    {job, userId},
                    function(err, item) {
                        if(err) {reject(item)}
                        else{
                            job._id = item.ops[0]._id;
                            resolve({job});
                        }
                    }
                );
            });
        });
    },

    editJob: function(jobId, job){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('jobs').updateOne({_id : ObjectID(jobId)}, {$set: {job}}, function(err) {if(err) reject(err);});
            });
        });
    },

    removeJob: function(token, job){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('jobs').deleteOne({_id : ObjectID(job)}, function(err) {
                    if(err) reject(err);
                });
            });
        });
    },

    getCosts: function(token, filter){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                let userId = that.getUserByToken(token)['id'];
                let search = filter ? {userId, name: { $regex : `${filter}`, $options: 'i'}} : {userId};

                db.collection('costs').find(search, {userId:0}).toArray(function(err, items) {
                    if(err) {
                        reject(err)
                    }
                    else{
                        let costs = [];
                        for(let i in items){
                            items[i].cost._id = items[i]._id;
                            costs.push(items[i].cost);
                        }

                        db.collection('cost_types').find({}).toArray(function(err, items) {
                            if(err) {
                                reject(err)
                            }
                            else{
                                resolve({costs, cost_types: items});
                            }
                        });
                    }
                });
            });
        });
    },

    addCost: function(token, cost){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                let userId = that.getUserByToken(token)['id'];
                db.collection('costs').insertOne(
                    {cost, userId},
                    function(err, item) {
                        if(err) {reject(item)}
                        else{
                            cost._id = item.ops[0]._id;
                            resolve({cost});
                        }
                    }
                );
            });
        });
    },

    editCost: function(costId, cost){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('costs').updateOne({_id : ObjectID(costId)}, {$set: {cost}}, function(err) {if(err) reject(err);});
            });
        });
    },

    removeCost: function(token, cost){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                db.collection('costs').deleteOne({_id : ObjectID(cost)}, function(err) {
                    if(err) reject(err);
                });
            });
        });
    }
};