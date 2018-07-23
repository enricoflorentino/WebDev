var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

router.get("/campgrounds/:id/comments/new", middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err) {
            req.flash("error", err.message);
        } else {
            res.render("comments/new.ejs", {campground: campground});
        }
    });
});

router.post("/campgrounds/:id/comments", middleware.isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            req.flash("error", err.message);
        } else {
            var newcomment = {
                text: req.body.text,
                author: req.body.author
            } ;
            Comment.create(newcomment, function(err, comment){
            if (err) {
                req.flash("error", err.message);
            } else {
                comment.author.id = req.user._id;
                comment.author.username = req.user.username;
                comment.save();
                campground.comments.push(comment);
                campground.save();
                console.log(comment);
                req.flash("success",  "Successfully addded comment")
                res.redirect("/campgrounds/" + campground._id);
            }
        });
        }
    });
});

// EDIT COMMENT ROUTE
router.get("/campgrounds/:id/comments/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){ 
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if (err) {
            req.flash("error", err.message);
        } else {
            res.render("comments/edit.ejs", {campground_id : req.params.id, comment: foundComment});
        }
    })  
});

// UPDATE COMMENT ROUTE
router.put("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, {text: req.body.text}, function(err, updatedComment){
        if (err) {
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("Successfully edited comment");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// DESTROY COMMENT ROUTE

router.delete("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if (err) {
            req.flash("error", err.message);
            res.redirect("back");
        }
        else {
            req.flash("success", "Successfully deleted comment");
            res.redirect("/campgrounds/"+req.params.id);
        };
    });
});



module.exports = router;