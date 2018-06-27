$("div").css("backgroundColor", "purple");

$(".highlight").css("width","200px");

$("#change").text("Orange");

$("#addlink").html("<a href='https://google.com'>click to reroute to google</a>");

$("#correct").addClass("correct");
$("#done").addClass("done");
$("#wrong").addClass("wrong");


$("#alerty").click(function(){
	alert("You have clicked this button");
});

$("#encrypt").keypress(function(event){
	if(event.which === 13)
	{
		alert("f1yd" + $(this).val() + "ztfgh");
	}
});


$("#hover1").on("mouseenter", function(){
	$(this).css("backgroundColor", "purple");
});



$("#fadethem").on("click",function(){
	$("div").fadeOut(700);
});