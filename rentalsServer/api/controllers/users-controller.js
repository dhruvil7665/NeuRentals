//defines methods for CRUD operations
'use strict';
//import user service
const userService = require('../services/users-service');
const mongoose = require('mongoose');
//method to list all users
exports.list = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    //calls the service method that performs action on mongoDB and returns a promise with all users
    userService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to add a new user
exports.post = function (request, response) {
    const newUser = Object.assign({}, request.body);
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    //calls a service method that takes the user given in request and adds it in mongoDB
    userService.save(newUser)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to get a specific user
exports.get = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    //calls the service method that takes the userId given in request and returns a promise with the user object
    userService.get(request.params.userId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to update a user
// exports.put = function (request, response) {
//     const user = Object.assign({}, request.body);
//     const resolve = (user) => {
//         response.status(200);
//         response.json(user);
//     };
//     user._id = request.params.userId;
//     //calls the service method that takes the changes made to the user and updates it in the DB
//     userService.update(user)
//         .then(resolve)
//         .catch(renderErrorResponse(response));
// };

exports.put = function (request, response) {
    const user = Object.assign({}, request.body);
    const resolve = (user) => {


        response.status(200);
        response.json(user);
    };
    user._id = mongoose.Types.ObjectId(request.params.userId);
    // console.log(request.params.stickyId);
    // console.log(sticky._id);

    userService.update(user)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to delete a user
exports.delete = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json({
            message: 'User Successfully deleted'
        });
    };
    //calls the service method that deletes the user passed in the request
    userService.delete(request.params.userId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//if promise returns error, display the error
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};
