var express             = require("express");
var app                 = express();
var bodyParser          = require("body-parser");
var mongoose            = require("mongoose");
var methodOverride      = require("method-override");
var expressSanitizer    =  require("express-sanitizer");

// SET UP   
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
app.set("view engine", "ejs");
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true });

// SCHEMA SET UP
var blogSchema = new mongoose.Schema({
    title: String,
    image: {type: String, default: "https://upload.wikimedia.org/wikipedia/en/1/11/Fast_text.png"},
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);


// RESTful ROUTES

app.get("/", function(req, res){
    res.redirect("/blogs");
})

// INDEX Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("index.ejs", {blogs: blogs});
        }
    })
    
});

// NEW Route
app.get("/blogs/new", function(req, res){
    res.render("new.ejs");
});

// CREATE Route
app.post("/blogs", function(req, res){
    
    req.body.body = req.sanitize(req.body.body);
    console.log(req.body.body);
    var newpost = {
        title: req.body.title,
        image: req.body.image,
        body: req.body.body
    };
    Blog.create(newpost, function(err, newpost){
        if(err){
            console.log(err);
        } else {
            res.redirect("/blogs");
        }
    })
});

// SHOW Route

app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log(err);
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: blog});
        }
    });
});


// EDIT ROUTE

app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log(err);
        } else {
            res.render("edit.ejs", {blog: blog});
        }
    })
});

// UPDATE Route

app.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, {title: req.body.title, image: req.body.image, body: req.body.body}, function(err, updatedBlog){
        if(err) {
            console.log(err);
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DESTROY Route

app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err){
        res.redirect("/blogs");
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Blog Server has started");
});