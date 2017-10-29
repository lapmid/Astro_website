$("sub").click(function(){

	var data = $("#myform :input").serializeArray();
	$.post($("myform1").attr("action"),data,function(info){ });
});

$("#myform").submit(function(){
	return false;
});