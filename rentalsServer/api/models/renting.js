//consist of mongoDB schema and model
'use strict';
//import mongoose
const mongoose = require('mongoose');
//get the schema and store it in variable Schema
const Schema = mongoose.Schema;

//create schema
let RentingSchema = new Schema({

    userId: {
        type: String,
        required: "User Id is required"
    },

    postId: {
        type: String,
        required: "Post Id is required"
    },

    cost: {
        type: Number,
        required: "Cost is required"
    },

    dateOfOrder: {
        type: Date,
        default: Date.now
    },

    rentStartDate: {
        type: Date
    },

    rentEndDate: {
        type: Date
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
RentingSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
RentingSchema.set('toJSON', {
    virtuals: true
});

//create model for storing renting data
mongoose.model('renting', RentingSchema);
