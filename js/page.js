
var globUnits = 'oz';

function updateUnits() {
	$(".varUnit").each(function() {
		$(this).text($(this).data(globUnits));
	});
}

jQuery(document).ready(function() {

	$(document).foundation();

	updateUnits();

	$("#units").change(function() {
  		globUnits = $(this).val();
		console.log(globUnits);
		updateUnits();
	});

});

