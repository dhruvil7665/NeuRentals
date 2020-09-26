'use strict';
const mongoose = require('mongoose');
const post = mongoose.Schema;

//defining the schema for mongoDB
let PostsSchema = new post({


    /**
     * Title of the post
     */
    title: {
        type: String,
        required: "title is required"
    },
    /**
     * post created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },
    /**
     * post description.
     */
    description: {
        type: String
    },
    /**
     * Last modified date of the post.
     */
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    IsActive: {
        type: Boolean,
    },
    isApproved: {
        type: Boolean,
    },
    photos:{
        type: Array

      //  required:"post pictures are required"
    },
    videos:{
        type: Array
       // required:"post videos are required"
    },
    approvedData:{
        type:Date,
    },
    approvedByEditorName:{
        type:String,
    },
    category:{
        type:String,
    },
    subCategory:{
        type: String,
    },
    rentingWindowTimeFrame:{type: Array,
    items: Object,
    properties: {
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    }
    },
    rentingWindowTypeWithPrice:{
        type: Array,
        items: Object,
        properties: {
            type: {
                type: String
            },
            price:{
                type:Number
            }
        }
    },
    pickupLocation:{
        type:String,
    },
    customerId:{
        id: String,
    }
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
PostsSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
PostsSchema.set('toJSON', {
    virtuals: true
});

//exporting everything using a module and creates a model when called by server.js
module.exports = mongoose.model('Post', PostsSchema);
