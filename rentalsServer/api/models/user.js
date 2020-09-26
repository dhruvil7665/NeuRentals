'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for User object.
 */
let UserSchema = new Schema({
    /**
     * First Name
     */
    fname: {
        type: String,
        required: "First Name is required"

    },

    /**
     * Last Name
     */
    lname: {
        type: String
        //required: "Last Name is required"

    },

    /**
     *Email
     */
    email: {
        type: String
        //required: "Email ID is required"
    },

    /**
     *Phone
     */
    phone: {
        type: Number
        //required: "Phone Number is required"
    },

    /**
     * Address
     */
    address: {
        type: String
        //required: "Address is required"

    },
    /**
     *Date of Birth
     */
    dob: {
        type: Date
        //required: "Date of Birth is required"
    },

    /**
     *NUID
     */
    nuid: {
        type: Number
        //required: "NUID is required"
    },

    /**
     *Password
     */
    password: {
        type: String
        //required: "Password is required"
    },

    /**
     *Credit card Details
     */
    cardDetails: {

        cardNo: {
            type: Number
            //required: "Card Number is required"
        },
        cardDate: {
            type: Date
            //required: "Valid Thru Date is required"
        },
        cardHolderName: {
            type: String
            //required: "Card Holder Name is required"
        }
    },

    /**
     *Date of Account Creation
     */
    creationDate: {
        type: Date,
        default: Date.now
    },

    /**
     *Gender
     */
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
        //required: "Gender is required"
    },

    /**
     *Active Status
     */
    isActive: {
        type: Boolean
    },

    /**
     *Last Login
     */
    lastLogin: {
        type: Date
    },

    /**
     *Profile Image
     */
    profileImg: {
        type: String
    },

    /**
     *List of Products in Cart
     */
    cartList: {
        type: Array,
        items: Object,
        properties: {
            postid: {
                type: Number
            },
            startDate: {
                type: Date
            },
            endDate: {
                type: Date
            }
        }
    },

    /**
     *Referral Code
     */
    referralCode: {
        type: String
    },

}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('User', UserSchema);