'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for Admin object.
 */
let AdminSchema = new Schema({

    /**
     *Email ID as Username
     */
    username: {
        type: String,
        required : "Username is required"
    },

    /**
     *Password
     */
    password: {
        type: String,
        required : "Password is required"
    },


}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
AdminSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
AdminSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Admins', AdminSchema);