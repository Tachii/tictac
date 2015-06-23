$(document).ready(function() {
	var x = 'x';
	var o = 'o';
	var turns = 0;
	var i = 1;

	while (i > 9) {
		eval('var spot' + i + '= $("#spot' + i + '")');
		i++;
	}
	
	

	$('#board li').on('click', function() {

	});

});
