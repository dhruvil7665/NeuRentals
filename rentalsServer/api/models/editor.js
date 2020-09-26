// Model layer

'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Mongoose schema for _todo Object
let EditorSchema = new Schema({

        firstName: {
            type: String,
            required: "First name is required"
        },
        lastName: {
            type: String,
            required: "Last name is required"
        },
        email: {
            type: String,
            required: "Email is required"
        },
        phoneNumber: {
            type: Number,
            required: "Phone Number is required"
        },
        address: {
            addressLine1: {
                type: String,
                // required: "Address Line 1 is required"
            },
            addressLine2: {
                type: String,
            },
            city: {
                type: String,
                // required: "City is required"
            },
            state: {
                type: String,
                // required: "City is required"
            },
            zipCode: {
                type: Number,
                // required: "Zip Code is required"
            },
        },
        employeeID: {
            type: Number,
            // required: "Employee ID is required"
        },

        password: {
            type: String,
            required: "Password is required"
        },
        IsActive: {
            type: Boolean,
            default: true
        },
    },

    {
        versionKey: false
    });
// Duplicate the id field as mongoose returns _id field instead of id.
EditorSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialized.
// Eg: combining firstName and lastName fields at runtime to produce fullName
EditorSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Editors', EditorSchema);
