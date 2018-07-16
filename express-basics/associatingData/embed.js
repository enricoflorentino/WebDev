var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/user_post', { useNewUrlParser: true });

// POST - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);


// USER - email, name

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts : [postSchema] // EMBEDDING DATA
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "dave@todd.edu",
//     name: "Dave Todd"
// });

// newUser.posts.push({
//     title: "Graduating School",
//     content: "Graduated from York University!"
// });



// newUser.save(function(err, user){
//      if(err) {
//          console.log(err);
//      } else {
//          console.log(user);
//      }
// });

// var newPost = new Post({
//     title: "Starting School",
//     content: "starting my first year at McMaster University!"
// });


// newPost.save(function(err, user){
//      if(err) {
//          console.log(err);
//      } else {
//          console.log(user);
//      }
// });

User.findOne({name:"Dave Todd"}, function(err, user){
    if(err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "Looking for a job...",
            content: "Title says it all!"
        });
        user.save(function(err, user){
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
});
    