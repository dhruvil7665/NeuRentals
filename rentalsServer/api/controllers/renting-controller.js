//defines methods for CRUD operations
'use strict';
//import renting service
const rentingService = require('../services/renting-service');

//method to list all rentings
exports.list = function (request, response) {
    const resolve = (renting) => {
        response.status(200);
        response.json(renting);
    };
    //calls the service method that performs action on mongoDB and returns a promise with all rentings
    rentingService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to add a new renting
exports.post = function (request, response) {
    const newRenting = Object.assign({}, request.body);
    const resolve = (renting) => {
        response.status(200);
        response.json(renting);
    };
    //calls a service method that takes the renting given in request and adds it in mongoDB
    rentingService.save(newRenting)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to get a specific renting
exports.get = function (request, response) {
    const resolve = (renting) => {
        response.status(200);
        response.json(renting);
    };
    //calls the service method that takes the rentingID given in request and returns a promise with the renting object
    rentingService.get(request.params.rentingId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to update a renting
exports.put = function (request, response) {
    const renting = Object.assign({}, request.body);
    const resolve = (renting) => {
        response.status(200);
        response.json(renting);
    };
    renting._id = request.params.rentingId;
    //calls the service method that takes the changes made to the renting and updates it in the DB
    rentingService.update(renting)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to delete a rent
exports.delete = function (request, response) {
    const resolve = (renting) => {
        response.status(200);
        response.json({
            message: 'Renting Successfully deleted'
        });
    };
    //calls the service method that deletes the renting passed in the request
    rentingService.delete(request.params.rentingId)
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
