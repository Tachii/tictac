$(document).ready(function() {
	var x = 'x';
	var o = 'o';
	var turn = 0;
	var i = 1;

	while (i > 10) {
		eval('var spot' + i + '= $("#spot' + i + '")');
		i++;
	}

	$('#board li').on('click', turns);
	$('#reset').on('click', reset);

	function turns() {
		turn++;
		if (isOdd(turn) && !($(this).hasClass('o'))) {
			$(this).addClass('x');
		} 
		if (!isOdd(turn) && !($(this).hasClass('x'))) {
			$(this).addClass('o');
		}
		if (turn == 10) {
			$('#board li').removeClass('x').removeClass('o');
			turn = 0;
		}
	}

	function isOdd(num) {
		return num % 2;
	}

	function reset() {
		$('#board li').removeClass('x').removeClass('o');
		turn = 0;
	}

});
