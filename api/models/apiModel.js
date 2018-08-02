`use strict`;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema   = new Schema({
    name:{
        type: String,
        require: 'Name must be provided!',
    },
    created_Date:{
        type: Date,
        default: Date.now(),
    },
    status:{
        type:[{
            type: String,
            enum: [ 'Pending', 'Ongoing', 'Completed' ],
        }],
        default: 'Pending',
    },
});

module.exports = mongoose.model( 'User', UserSchema );
