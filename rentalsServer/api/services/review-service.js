//executes queries on mongoDB
'use strict';
const mongoose = require('mongoose'),
    Review = mongoose.model('Review');

//returns all reviews
exports.search = function (params) {
    const promise = Review.find(params).exec();
    return promise;
};

//adds a review
exports.save = function (review) {
    const newReview = new Review(review);
    const promise = newReview.save();
    return promise;
};

//returns a specific review based on reviewID
exports.get = function (reviewId) {
    const promise = Review.findById(reviewId).exec();
    return promise
};

//updates a specific review based on reviewID
exports.update = function (review) {
    //renting.modified_date = new Date();
    const promise = Review.findOneAndUpdate({_id: review._id}, review).exec();
    return promise;
};

//deletes a specific review based on reviewID
exports.delete = function (reviewId) {
    const promise = Review.remove({_id: reviewId});
    return promise;
};
