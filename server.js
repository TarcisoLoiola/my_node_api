const   express = require( 'express' )

        app = express()

        port = process.env.PORT || 3002
        
        mongoose = require('mongoose')

        Task = require( './api/models/apiModel' )

        bodyParser = require( 'body-parser' );

mongoose.Promise= global.Promise;

mongoose.connect( 'mongodb://localhost/my_node_api' );

app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(bodyParser.json());

const routes = require( './api/routes/apiRoute' );
routes(app);

app.use(( req, res ) => {
    // console.log( res );
    res.status(404).send( `URL Request: ${req.originalUrl} Not Found!`);
});




app.listen(port, () => console.log( `RESTFULL API App Listening To Port ${port}!`))