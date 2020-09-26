//all variables should be declared
'use strict';
//all the imports can be referred using module.exports
module.exports = function (app) {
    //Initialize models
    //import models
    let rentingModel = require('./models/renting');
    let reviewModel = require('./models/review');


    // let CategoryModel = require('./models/productCategory');
    let postsModel = require('./models/posts')
    let usersModel = require('./models/user')


    //Initialize routes
    //import routes
    let rentingRoutes = require('./routes/renting-route');
    rentingRoutes(app);
    let reviewRoutes = require('./routes/review-route');
    reviewRoutes(app);


    // let categoryRoutes = require('./routes/category-route');
    // categoryRoutes(app);



    let postRoutes = require('./routes/posts-route');
    postRoutes(app);

    let userRoutes = require('./routes/users-route');
    userRoutes(app);
};


