//executes queries on mongoDB
'use strict';
const mongoose = require('mongoose'),
    Renting = mongoose.model('renting');

//returns all rentings
exports.search = function (params) {
    const promise = Renting.find(params).exec();
    return promise;
};

//adds a renting
exports.save = function (renting) {
    const newRenting = new Renting(renting);
    const promise = newRenting.save();
    return promise;
};

//returns a specific renting based on rentingID
exports.get = function (rentingId) {
    const promise = Renting.findById(rentingId).exec();
    return promise
};

//updates a specific renting based on rentingID
exports.update = function (renting) {
    //renting.modified_date = new Date();
    const promise = Renting.findOneAndUpdate({_id: renting._id}, renting).exec();
    return promise;
};

//deletes a specific renting based on rentingID
exports.delete = function (rentingId) {
    const promise = Renting.remove({_id: rentingId});
    return promise;
};
