//consist of mongoDB schema and model
'use strict';
//import mongoose
const mongoose = require('mongoose');
//get the schema and store it in variable Schema
const Schema = mongoose.Schema;

//create schema
let ReviewSchema = new Schema({

    userId: {
        type: String,
        required: "User Id is required"
    },

    postId: {
        type: String,
        required: "Post Id is required"
    },

    reviewDescription: {
        type: String
    },

    rating: {
        type: Number,
        required: "Rating is required"
    },

    createdDate: {
        type: Date,
        default: Date.now
    },

    modifiedDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
ReviewSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ReviewSchema.set('toJSON', {
    virtuals: true
});

//create model for storing reviews
mongoose.model('Review', ReviewSchema);
