$(document).ready(function() {
	var x = 'x';
	var o = 'o';
	var turn = 0;
	var i = 1;

	while (i > 10) {
		eval('var spot' + i + '= $("#spot' + i + '")');
		i++;
	}

	function isOdd(num) {
		return num % 2;
	}

	$('#board li').on('click', function() {
		turn++;
		if (isOdd(turn)){
			$(this).addClass('x');
		} else {
			$(this).addClass('o');
		}
	});

});
