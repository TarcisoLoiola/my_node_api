const exports = module.exports = {};

// exports.login = function (req, res) {
//     res.render("login");
// };

// exports.register = function(req, res) {
//     res.render("register");
// };

exports.logout = function(req,res){
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};