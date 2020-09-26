//defines the routes --> URL for .get, .post, .put and .delete
'use strict';
module.exports = function (app) {
    //import controller
    const rentingController = require('../controllers/renting-controller');

    //route method lets us define multiple actions on a single route
    app.route('/rentings')
        .get(rentingController.list)
        .post(rentingController.post);

    //defines the URL i.e. URL should have rentingID to perform the actions
    app.route('/rentings/:rentingId')
        .get(rentingController.get)
        .put(rentingController.put)
        .delete(rentingController.delete);
};
