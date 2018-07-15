var mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/employee_app', { useNewUrlParser: true });


var employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    efficiency: Number
});

var Staff = mongoose.model("Employee", employeeSchema);


var tom = new Staff({
    name: "Tom",
    age: 23,
    efficiency: 9
});

tom.save(function(err, employee){
    if(err) {
        console.log("error");
    }
    else {
        //console.log(employee);
    }
});

Staff.create({
    name: "Bob",
    age: 19,
    efficiency: 4
},function(err, employee){
    if(err){
        console.log(err);
    }
    else {
        //console.log(employee);
    }
});


Staff.find({}, function(err, employees){
    if(err){
        console.log(err);
    }
    else{
        console.log(employees);
    }
});