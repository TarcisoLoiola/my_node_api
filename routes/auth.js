
module.exports = (app, passport) => {

    app.post("/login", passport.authenticate("local-login", (err, res, message) => {
        try {
            res.json(err, res, message)
        } catch (error) {
            res.json(err, res, message)
        }
    }
    ));

    app.post("/register", passport.authenticate("local-register", (err, res, message) => {
        try {
            res.json(err, res, message)
        } catch(error) {
            res.json(err, res, message)
        }
    }
    ));

};

