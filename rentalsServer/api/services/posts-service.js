//service.js has the core functions that perform operations on the database according to the HTTP request
'use strict';
const mongoose = require('mongoose'), //importing mongoose
    Post = mongoose.model('Post'); //

//searches the to-do passed in the params in the database
exports.search = function (params) {
    const promise = Post.find(params).exec();
    return promise;
};



//gets the posts requested by finding it in the database using the id
exports.get = function (postId) {
    const promise = Post.findById(postId).exec();
    return promise
};



exports.save = function (post) {
    const newPost = new Post(post);
    const promise = newPost.save();
    return promise;
};

//updates a specific post based on postID
exports.update = function (post) {
    post.modified_date = new Date();
    const promise = Post.findOneAndUpdate({_id: post._id}, post).exec();
    return promise;
};

//deletes a specific post based on postID
exports.delete = function (postId) {
    const promise = Post.remove({_id: postId});
    return promise;
};
