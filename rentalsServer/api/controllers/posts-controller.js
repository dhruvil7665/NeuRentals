
'use strict';
//import posts service.
const postsService = require('../services/posts-service');
//import mongoose library
const mongoose = require('mongoose');

//exports the list function which is called in other files
exports.list = function (request, response) {
    const resolve = (posts) => {
        response.status(200);
        response.json(posts);
    };
    postsService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//exports the post function which is called in other files
exports.post = function (request, response) {
    const newPost = Object.assign({}, request.body);
    const resolve = (post) => {
        response.status(200);
        response.json(post);
    };
    postsService.save(newPost)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//get single post
//exports the get function which is called in other files
exports.get = function (request, response) {
    const resolve = (post) => {
        response.status(200);
        response.json(post);
    };
    postsService.get(request.params.postId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//update post
//exports the update function which is called in other files
exports.put = function (request, response) {
    const post = Object.assign({}, request.body);
    const resolve = (post) => {


        response.status(200);
        response.json(post);
    };
    post._id = mongoose.Types.ObjectId(request.params.postId);
    // console.log(request.params.stickyId);
    // console.log(sticky._id);

    postsService.update(post)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//delete a post
//exports the delete function which is called in other files
exports.delete = function (request, response) {
    const resolve = (post) => {
        response.status(200);
        response.json({
            message: 'Post Successfully deleted'
        });
    };
    postsService.delete(request.params.postId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


//function that returns error to be printed on incorrect HTTP request
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                //error response given to the http request
                message: error.message
            });
        }
    }
    return errorCallback;
};
