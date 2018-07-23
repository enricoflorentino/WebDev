var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");

// LANDING PAGE ROUTE
router.get("/", function(req,res){
    res.render("landing.ejs");
});


router.get("/register", function(req, res){
    res.render("register.ejs");
});

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Successfully registered you as " + user.username); 
            res.redirect("/campgrounds");
        });
    });
});


router.get("/login", function(req, res){
    res.render("login.ejs");
});

router.post("/login", passport.authenticate("local",{
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
    }), function(req, res){
});

// logout route
router.get("/logout", middleware.isLoggedIn, function(req, res){
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/campgrounds");
});



module.exports = router;