$(document).ready(function() {

	//E-mail Ajax Send
	$(".form-feedback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "./email/mail_simple.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
