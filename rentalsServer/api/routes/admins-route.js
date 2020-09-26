//defines the routes --> URL for .get, .post, .put and .delete
'use strict';
module.exports = function (app) {
    //import controller
    const adminController = require('../controllers/admins-controller');

    //route method lets us define multiple actions on a single route
    app.route('/admins')
        .get(adminController.list)
        .post(adminController.post);

    //defines the URL i.e. URL should have adminId to perform the actions
    app.route('/admins/:adminId')
        .get(adminController.get)
        .put(adminController.put)
        .delete(adminController.delete);
};
