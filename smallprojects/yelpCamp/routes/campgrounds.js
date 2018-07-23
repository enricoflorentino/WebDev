var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

// INDEX ROUTE
router.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            req.flash("error", err.message);
        } else {
            res.render("campgrounds/index.ejs", {campgrounds:allCampgrounds});
        }
    });
});

// CREATE ROUTE
router.post("/campgrounds", middleware.isLoggedIn, function(req, res){
    var newname = req.body.name;
    var newprice = req.body.price
    var newimage = req.body.image;
    var desc = req.body.description;
    var author =  {
        id: req.user._id,
        username: req.user.username
    }
    var newCG = {name: newname, price: newprice, image: newimage, description: desc, author: author};
    Campground.create(newCG, function(err, newlyCreated){
        if(err){
            req.flash("error", err.message);
        } else {   
            req.flash("success", "Successfully created campground");
            res.redirect("/campgrounds");
        }
    });
    
});
// NEW ROUTE
router.get("/campgrounds/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new.ejs");
});


// SHOW ROUTE
router.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            req.flash("error", err.message);
        }
        else {
            res.render("campgrounds/show.ejs", {campground: foundCampground});
        }
    });
});

// EDIT CAMPGROUND ROUTE

router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
        Campground.findById(req.params.id, function(err, foundCampground){
            res.render("campgrounds/edit.ejs", {campground: foundCampground});
        });
});

// UPDATE CAMPGROUND ROUTE

router.put("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res){
    var updatedCG = {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    }
    Campground.findByIdAndUpdate(req.params.id, updatedCG, function(err, updatedCampground){
        if (err) {
            req.flash("error", err.message);
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Successfully updated campground");
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
});


// DESTROY CAMPGROUND ROUTE

router.delete("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            req.flash("error", err);
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Successfully deleted campground");
            res.redirect("/campgrounds");
        }
    });
})

module.exports = router;