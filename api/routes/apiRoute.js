
module.exports = (app) => {

    const route = require( '../controllers/apiController')
    // todoList Routes
    app.route('/')
        .get( route.find_user )
        .post( route.create_user )
        .put( route.update_user )
        .delete( route.remove_user );
}