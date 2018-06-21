window.setTimeout(function() {
  var todo = [];
  var input = prompt("What would you like to do");

  var newitem;
  var deleteindex;

  while (input != "quit"){

  	if (input == "list") {
		console.log(todo);
	}
	if (input == "new") {
		newitem = prompt("What would you like to add?");
		todo.push(newitem);
	}

	if (input == "delete") {
		deleteindex = prompt("What is the index of the item you would like to delete");
		todo.splce(deleteindex,1);

	}

	input = prompt("What would you like to do?");
}

}, 500);


