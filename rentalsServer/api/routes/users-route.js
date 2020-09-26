//defines the routes --> URL for .get, .post, .put and .delete
'use strict';
module.exports = function (app) {
    //import controller
    const userController = require('../controllers/users-controller');

    //route method lets us define multiple actions on a single route
    app.route('/users')
        .get(userController.list)
        .post(userController.post);

    //defines the URL i.e. URL should have userId to perform the actions
    app.route('/users/:userId')
        .get(userController.get)
        .put(userController.put)
        .delete(userController.delete);
};
