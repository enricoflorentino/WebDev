var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/user_post2', { useNewUrlParser: true });

// POST - title, content


var Post = require("./models/post");
var User = require("./models/user");
// var postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// var Post = mongoose.model("Post", postSchema);


// USER - email, name

// var userSchema = new mongoose.Schema({
//     email: String,
//     name: String,
//     posts : [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Post" 
            
//         }] // REFERENCING DATA
// });

// var User = mongoose.model("User", userSchema);


User.create({
    email: "bob@gmail.com",
    name: "Bob Brown"
});

Post.create({
    title: "how to be the very best",
    content: "idk ask yourself"
});


Post.create({
    title: "my second new post",
    content: "i made this post using referencing!"
}, function(err,post) {
    if(err) {
        console.log(err);
    } else {
        User.findOne({name: "Bob Brown"}, function(err, foundUser){
            if(err) {
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                })
            }
        })
    }
})
 User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err,user){
     if(err) {
         console.log(err);
     } else {
         console.log(user);
     }
 });
