//service.js has the core functions that perform operations on the database according to the HTTP request
'use strict';
const mongoose = require('mongoose'), //importing mongoose
    Admins = mongoose.model('Admins'); //

//searches the admin passed in the params in the database
exports.search = function (params) {
    const promise = Admins.find(params).exec();
    return promise;
};


//gets the admin requested by finding it in the database using the id
exports.get = function (adminId) {
    const promise = Admins.findById(adminId).exec();
    return promise
};


//updates a specific admin based on adminID
exports.update = function (admin) {
    const promise = Admins.findOneAndUpdate({_id: admin._id}, admin).exec();
    return promise;
};

//deletes a specific admin based on adminID
exports.delete = function (adminId) {
    const promise = Admins.remove({_id: adminId});
    return promise;
};

exports.save = function (admin) {
    const newAdmin = new Admins(admin);
    const promise = newAdmin.save();
    return promise;
};
