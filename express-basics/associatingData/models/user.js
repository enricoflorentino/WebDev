var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post" 
            
        }] // REFERENCING DATA
});

module.exports = mongoose.model("User", userSchema);