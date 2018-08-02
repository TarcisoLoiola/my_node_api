'use strict';

const mongoose = require( 'mongoose' );

const User = mongoose.model('User');

exports.find_user = ( req, res ) => {
    User.find({ }), ( err, users ) => {
        if( err ) res.json( err );
        res.json( "users" );
    }
};

exports.create_user = ( req, res ) => {
    User.find({ }), ( err, users ) => {
        if( err ) res.json( err );
        res.json( users );
    }
};

exports.update_user = ( req, res ) => {
    User.find({ }), ( err, users ) => {
        if( err ) res.json( err );
        res.json( users );
    }
}

exports.remove_user = ( req, res ) => {
    User.find({ }), ( err, users ) => {
        if( err ) res.json( err );
        res.json( users );
    }
};