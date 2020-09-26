//defines methods for CRUD operations
'use strict';
//import review service
const reviewService = require('../services/review-service');

//method to list all reviews
exports.list = function (request, response) {
    const resolve = (review) => {
        response.status(200);
        response.json(review);
    };
    //calls the service method that performs action on mongoDB and returns a promise with all reviews
    reviewService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to add a new review
exports.post = function (request, response) {
    const newReview = Object.assign({}, request.body);
    const resolve = (review) => {
        response.status(200);
        response.json(review);
    };
    //calls a service method that takes the review given in request and adds it in mongoDB
    reviewService.save(newReview)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to get a specific review
exports.get = function (request, response) {
    const resolve = (review) => {
        response.status(200);
        response.json(review);
    };
    //calls the service method that takes the reviewID given in request and returns a promise with the review object
    reviewService.get(request.params.reviewId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to update a review
exports.put = function (request, response) {
    const review = Object.assign({}, request.body);
    const resolve = (review) => {
        response.status(200);
        response.json(review);
    };
    review._id = request.params.reviewId;
    //calls the service method that takes the changes made to the review and updates it in the DB
    reviewService.update(review)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to delete a review
exports.delete = function (request, response) {
    const resolve = (review) => {
        response.status(200);
        response.json({
            message: 'Review Successfully deleted'
        });
    };
    //calls the service method that deletes the review passed in the request
    reviewService.delete(request.params.reviewId)
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
