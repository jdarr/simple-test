//handle links output
$(document).ready(function(){

	var links = $('.header-container a');
	links.on('click',function(e){
		e.preventDefault();
		console.log($(this).prop('href'));
	});

});
