//service.js has the core functions that perform operations on the database according to the HTTP request
'use strict';
const mongoose = require('mongoose'), //importing mongoose
    User = mongoose.model('User'); //

//searches the user passed in the params in the database
exports.search = function (params) {
    const promise = User.find(params).exec();
    return promise;
};


//gets the users requested by finding it in the database using the id
exports.get = function (userId) {
    const promise = User.findById(userId).exec();
    return promise
};


//updates a specific user based on userId
exports.update = function (user) {
    const promise = User.findOneAndUpdate({_id: user._id}, user).exec();
    return promise;
};


//deletes a specific user based on userId
exports.delete = function (userId) {
    const promise = User.remove({_id: userId});
    return promise;
};


exports.save = function (user) {
    const newUser = new User(user);
    const promise = newUser.save();
    return promise;
};
