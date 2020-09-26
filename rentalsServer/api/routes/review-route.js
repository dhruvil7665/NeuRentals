//defines the routes --> URL for .get, .post, .put and .delete
'use strict';
module.exports = function (app) {
    //import controller
    const reviewController = require('../controllers/review-controller');

    //route method lets us define multiple actions on a single route
    app.route('/reviews')
        .get(reviewController.list)
        .post(reviewController.post);

    //defines the URL i.e. URL should have reviewID to perform the actions
    app.route('/reviews/:reviewId')
        .get(reviewController.get)
        .put(reviewController.put)
        .delete(reviewController.delete);
};
