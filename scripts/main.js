

$('.go-btn').click(function() {
	var input = $('.user-input').val();

	$('.placeholder').html(input);

});

var index = 0;

$('.change-image').click(function() {
	index++;
	if (index > 10) {
		index = 0;
	}


	$('.meme img').attr('src', 'http://lorempixel.com/600/400/cats/' + index);


});