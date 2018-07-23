var express         = require("express");
var app             = express();
var bodyParser      = require("body-parser");
var mongoose        = require("mongoose");
var passport        = require("passport");
var LocalStrategy   = require("passport-local");
var methodOverride  = require("method-override");
var Campground      = require("./models/campground");
var Comment         = require("./models/comment");
var User            = require("./models/user");
var seedDB          = require("./seeds");
var flash           = require("connect-flash");


// requiring routes
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var authRoutes = require("./routes/auth");

//seedDB();


mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs")


// PASSPORT set up

app.use(require("express-session")({
    secret: "This is a really cool camp website",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

// this will be called on every route, passes that as a parameter to all ejs template
// similar to middleware
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.errormessage = req.flash("error");
    res.locals.successmessage = req.flash("success");
    next();
});

// Routes defined here!
app.use(commentRoutes);
app.use(campgroundRoutes);
app.use(authRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started");
});