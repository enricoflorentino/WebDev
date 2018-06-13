window.setTimeout(function() {
  var todo = [];
  var input = prompt("What would you like to do");

  var newitem;

  while (input != "quit"){

  	if (input == "list") {
		console.log(todo);
	}
	if (input == "new") {
		newitem = prompt("What would you like to add?");
		todo.push(newitem);
	}

	input = prompt("What would you like to do?");
}

}, 500);


