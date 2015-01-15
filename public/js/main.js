
$(document).ready(function(){

	//handle links output
	var links = $('.header-container a');
	links.on('click',function(e){
		e.preventDefault();
		console.log($(this).prop('href'));
	});

	//handle ajax request of data
	$.ajax({
		url:'json/data.json',
		dataType:'json',
		success:function(data, status, xhr){
			
			//display data to console
			console.log(data);

			//loop through json
			var thumbs = data.thumbs;
			var html = '';
			for(var i=0;i<thumbs.length;i++){
				html += thumbHtml( thumbs[i].title, thumbs[i].thumb, thumbs[i].url);
			}

			//render html in dom
			$('.thumb-wrapper').html( html );

		}
	});             

});

var thumbHtml = function( title, thumb, url){
	
	var str = "<div class='thumb-container'>";
		str += "<a href='"+ url + "'><img src='" + thumb + "' alt='" + title + "' /></a>";
		str += "<span class='caption'>" + title + "</span>";
		str += "</div>";

	return str;
}