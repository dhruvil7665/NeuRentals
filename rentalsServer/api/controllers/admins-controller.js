//defines methods for CRUD operations
'use strict';
//import admin service
const adminService = require('../services/admins-service');

//method to list all admins
exports.list = function (request, response) {
    const resolve = (admin) => {
        response.status(200);
        response.json(admin);
    };
    //calls the service method that performs action on mongoDB and returns a promise with all admins
    adminService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to add a new admin
exports.post = function (request, response) {
    const newAdmin = Object.assign({}, request.body);
    const resolve = (admin) => {
        response.status(200);
        response.json(admin);
    };
    //calls a service method that takes the admin given in request and adds it in mongoDB
    adminService.save(newAdmin)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to get a specific admin
exports.get = function (request, response) {
    const resolve = (admin) => {
        response.status(200);
        response.json(admin);
    };
    //calls the service method that takes the adminId given in request and returns a promise with the admin object
    adminService.get(request.params.adminId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to update a admin
exports.put = function (request, response) {
    const admin = Object.assign({}, request.body);
    const resolve = (admin) => {
        response.status(200);
        response.json(admin);
    };
    admin._id = request.params.adminId;
    //calls the service method that takes the changes made to the admin and updates it in the DB
    adminService.update(admin)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to delete a admin
exports.delete = function (request, response) {
    const resolve = (admin) => {
        response.status(200);
        response.json({
            message: 'Admin Successfully deleted'
        });
    };
    //calls the service method that deletes the admin passed in the request
    adminService.delete(request.params.adminId)
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
