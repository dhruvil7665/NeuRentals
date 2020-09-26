//defines methods for CRUD operations
'use strict';
//import category Service
const CategoryService = require('../services/category-service');

//method to list all categories
// Do i need to add more code for subcategory?
exports.list = function (request, response) {
    const resolve = (category) => {
        response.status(200);
        response.json(category);
    };
    //calls the service method that performs action on mongoDB and returns a promise with all categories
    CategoryService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to add a new category
exports.post = function (request, response) {
    const newCategory = Object.assign({}, request.body);
    const resolve = (category) => {
        response.status(200);
        response.json(category);
    };
    //calls a service method that takes the category given in request and adds it in mongoDB
    categoryService.save(newCategory)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to get a specific category
exports.get = function (request, response) {
    const resolve = (category) => {
        response.status(200);
        response.json(category);
    };
    //calls the service method that takes the categoryID given in request and returns a promise with the category object
    CategoryService.get(request.params.categoryId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to update a category
exports.put = function (request, response) {
    const category = Object.assign({}, request.body);
    const resolve = () => {
        response.status(200);
        response.json(category);
    };
    category._id = request.params.categoryId;
    //calls the service method that takes the changes made to the category and updates it in the DB
    CategoryService.update(category)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to delete a category
exports.delete = function (request, response) {
    const resolve = (category) => {
        response.status(200);
        response.json({
            message: 'Category Successfully deleted'
        });
    };
    //calls the service method that deletes the category passed in the request
    CategoryService.delete(request.params.categoryId)
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
