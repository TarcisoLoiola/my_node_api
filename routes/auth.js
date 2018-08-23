
module.exports = function (app, passport) {

    app.post("/login", passport.authenticate("local-login", (res, err) => {
        try {
            res.json('Success')
        } catch (error) {
            // res.json(err)
        }
    }
    ));

    app.post("/register", passport.authenticate("local-register", (res, err) => {
        try {
            res.json('Success')
        } catch(error) {
            // res.json(err)
        }
    }
    ));

};

