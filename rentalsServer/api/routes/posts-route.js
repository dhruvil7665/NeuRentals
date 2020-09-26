'use strict';
module.exports = function (app) {
    const postController = require('../controllers/posts-controller');
    // Posts Routes for search and create.
    app.route('/posts/')
        .get(postController.list)
        .post(postController.post);

    // Posts Routes for get, update and delete.
    app.route('/posts/:postId')
        .get(postController.get)
        .put(postController.put)
        .delete(postController.delete);
};
