$(document).ready(function() {
	console.log('Woking')
	$('.t_in').hover(function() {
			$(this).toggleClass('t_in_change');
	});

	var disp = 0;

	function displayPage () {
		switch (disp) {
			case 0:
				$("#aboutContainer").slideDown(400, function() {
					$(this).removeClass("hidden");
				});
				$("#contactContainer").slideUp(400, function() {
					$(this).addClass("hidden");
				});
				$("#portfolioContainer").slideUp(400, function() {
					$(this).addClass("hidden");
				});
				break;
			case 1:
				$("#aboutContainer").slideUp(400, function() {
					$(this).addClass("hidden");
				});
				$("#contactContainer").slideDown(400, function() {
					$(this).removeClass("hidden");
				});
				$("#portfolioContainer").slideUp(400, function() {
					$(this).addClass("hidden");
				});
				break;
			case 2:
				$("#aboutContainer").slideUp(400, function() {
					$(this).addClass("hidden");
				});
				$("#contactContainer").slideUp(400, function() {
					$(this).addClass("hidden");
				});
				$("#portfolioContainer").slideDown(400, function() {
					$(this).removeClass("hidden");
				});
				break;
		}
	}
});