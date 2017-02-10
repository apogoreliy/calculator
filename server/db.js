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
};