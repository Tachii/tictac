$(document).ready(function() {
	var turn = 0;
	var i = 1;

	while (i > 10) {
		eval('var spot' + i + '= $("#spot' + i + '")');
		i++;
	}

	$('#board li').on('click', turns);
	$('#reset').on('click', reset);

	function turns() {
		if (isOdd(turn) && !($(this).hasClass('o')) && !($(this).hasClass('x'))) {
			$(this).addClass('x').text('x');
			turn++;
		} 
		if (!isOdd(turn) && !($(this).hasClass('x')) && !($(this).hasClass('o'))) {
			$(this).addClass('o').text('o');
			turn++;
		}
		if (turn == 10) {
			$('#board li').removeClass('x').removeClass('o').text("");
			turn = 0;
		}
	}

	function isOdd(num) {
		return num % 2;
	}

	function reset() {
		$('#board li').removeClass('x').removeClass('o').text("");
		turn = 0;
	}

});
