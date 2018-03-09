var db = require("../models/index");

module.exports = (app, passport) => {

    app.get('/', (req, res) => {

        var charityCard = [];
        db.Charity.findAll({})
            .then(function(dbPost) {

                charityCard = dbPost;

                res.render("index", {charityCardShow: charityCard,
                                     isLoggedIn:req.isAuthenticated()} );

            });
    });

    app.get('/signup', (req, res) => {
        res.render('signup', {isLoggedIn:req.isAuthenticated()} );
    });

    app.get('/signin', (req, res) => {
        res.render('signin', {isLoggedIn:req.isAuthenticated()} );
    });

    app.post(
        '/signup',
        passport.authenticate('local-signup', {
            successRedirect: '/',
            failureRedirect: '/signup'
        })
    );

    // app.get('/index', isLoggedIn, (req, res) => {
    //     res.render('index', {
    //         isLoggedIn: true
    //     });
    // });

    app.get('/logout', (req, res) => {
        req.session.destroy(err => {
            res.redirect('/');
        });
    });

    app.post(
        '/signin',
        passport.authenticate('local-signin', {
            successRedirect: '/',
            failureRedirect: '/signin'
        })
    );

    // function isLoggedIn(req, res, next) {
    //     console.log("isLoggedin");
    //     console.log("isLoggedin"+req.isAuthenticated());
    //     if (req.isAuthenticated()){
    //         return next();
    //     }
    //
    //     // res.redirect('/index');
    // }
};