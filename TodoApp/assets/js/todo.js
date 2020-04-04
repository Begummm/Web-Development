// Check off specific Todos by clicking

$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todos

$("ul").on("click","span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText+ "</li>");
	};
});

// Toggle plus icon

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(50);
});

// Changing background according to the chosen theme

$("#theme").on("change", function(){
    var theme = $(this).val();
    console.log("." + theme);
    // $(this).addClass(theme);
    $("body").toggleClass(theme);
 });